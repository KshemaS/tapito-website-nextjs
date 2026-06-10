"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh, Color, Vec2 } from "ogl";

const vert = /* glsl */ `
  precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform float ringCount;
  uniform float speed;
  uniform float noiseAmount;
  uniform float opacity;
  uniform float blur;
  uniform float ringGap;
  uniform float baseRadius;
  uniform float radiusStep;
  uniform float fadeIn;
  uniform float fadeOut;
  uniform vec2 mousePos;
  uniform float mouseInfluence;
  varying vec2 vUv;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = (vUv - 0.5) * (iResolution.xy / min(iResolution.x, iResolution.y));
    
    // Mouse influence
    uv -= mousePos * mouseInfluence;

    // Coordinate system
    vec2 p = uv;

    float finalAlpha = 0.0;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 30.0; i++) {
      if (i >= ringCount) break;
      
      float r = baseRadius + i * radiusStep * ringGap;
      float dist = length(p);
      
      // Add noise distortion
      float n = (noise(p * 3.0 + iTime * speed) - 0.5) * noiseAmount;
      float ringDist = abs(dist - r - n);
      
      float thickness = 0.002;
      float edge = 0.02 + blur * 0.02; // Softer edge for more glow
      
      float alpha = smoothstep(thickness + edge, thickness, ringDist);
      
      // Apply edge fades
      alpha *= smoothstep(0.0, fadeIn, r);
      alpha *= 1.0 - smoothstep(1.0 - fadeOut, 1.0, r);
      
      vec3 col = mix(color1, color2, i / ringCount);
      finalColor += col * alpha;
      finalAlpha = max(finalAlpha, alpha);
    }

    gl_FragColor = vec4(finalColor * opacity, finalAlpha * opacity);
  }
`;

interface MagicRingsProps {
  color?: string;
  colorTwo?: string;
  ringCount?: number;
  speed?: number;
  attenuation?: number;
  lineThickness?: number;
  baseRadius?: number;
  radiusStep?: number;
  scaleRate?: number;
  opacity?: number;
  blur?: number;
  noiseAmount?: number;
  rotation?: number;
  ringGap?: number;
  fadeIn?: number;
  fadeOut?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
}

export default function MagicRings({
  color = "#4f46e5",
  colorTwo = "#0ea5e9",
  ringCount = 12,
  speed = 0.4,
  opacity = 1,
  blur = 10,
  noiseAmount = 0.05,
  ringGap = 1.2,
  baseRadius = 0.2,
  radiusStep = 0.08,
  fadeIn = 0.7,
  fadeOut = 0.5,
  followMouse = true,
  mouseInfluence = 0.1,
}: MagicRingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new Vec2(0, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 5;

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec2() },
        color1: { value: new Color(color) },
        color2: { value: new Color(colorTwo) },
        ringCount: { value: ringCount },
        speed: { value: speed },
        noiseAmount: { value: noiseAmount },
        opacity: { value: opacity },
        blur: { value: blur },
        ringGap: { value: ringGap },
        baseRadius: { value: baseRadius },
        radiusStep: { value: radiusStep },
        fadeIn: { value: fadeIn },
        fadeOut: { value: fadeOut },
        mousePos: { value: mouse.current },
        mouseInfluence: { value: mouseInfluence },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      const { width, height } = containerRef.current!.getBoundingClientRect();
      renderer.setSize(width, height);
      program.uniforms.iResolution.value.set(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!followMouse) return;
      const { width, height, left, top } = containerRef.current!.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1;
      const y = -(((e.clientY - top) / height) * 2 - 1);
      mouse.current.set(x, y);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    let rafId: number;
    const update = (t: number) => {
      rafId = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.mousePos.value.lerp(mouse.current, 0.05);
      renderer.render({ scene: mesh });
    };
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      if (containerRef.current) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, [color, colorTwo, ringCount, speed, opacity, blur, noiseAmount, ringGap, baseRadius, radiusStep, fadeIn, fadeOut, followMouse, mouseInfluence]);

  return <div ref={containerRef} className="w-full h-full" />;
}
