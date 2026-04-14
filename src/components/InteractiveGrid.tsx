"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * InteractiveGrid - A premium, glowing canvas background with dynamic light beams.
 * Fixed: Resolved circular reference in animation loop.
 */

const GRID_SIZE = 80;
const BASE_LINE_ALPHA = 0.02;
const ACTIVE_LINE_ALPHA = 0.12;
const INFLUENCE_RADIUS = 300;
const LERP_FACTOR = 0.035;
const COLOR_RGB = "99, 102, 241";

interface LightBeam {
  axis: "h" | "v";
  coordinate: number;
  position: number;
  velocity: number;
  length: number;
  alpha: number;
}

export const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseTarget = useRef({ x: -2000, y: -2000 });
  const mouseCurrent = useRef({ x: -2000, y: -2000 });
  const beams = useRef<LightBeam[]>([]);
  const animFrameRef = useRef<number>(0);

  // 1. Separate Beam Spawning Logic
  const spawnBeam = useCallback((w: number, h: number) => {
    const axis: "h" | "v" = Math.random() > 0.5 ? "h" : "v";
    const coordinate = Math.floor(Math.random() * (axis === "h" ? h / GRID_SIZE : w / GRID_SIZE)) * GRID_SIZE;
    
    beams.current.push({
      axis,
      coordinate,
      position: -200,
      velocity: 5 + Math.random() * 8,
      length: 150 + Math.random() * 300,
      alpha: 0.2 + Math.random() * 0.3,
    });
    
    if (beams.current.length > 15) beams.current.shift();
  }, []);

  // 2. Pure Drawing Logic (No recursion)
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Smooth Mouse
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * LERP_FACTOR;
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * LERP_FACTOR;

    const mx = mouseCurrent.current.x;
    const my = mouseCurrent.current.y;
    const isActive = mx > -1000;

    // Draw Grid
    ctx.lineWidth = 1;
    for (let x = 0; x <= w + GRID_SIZE; x += GRID_SIZE) {
      const dist = isActive ? Math.abs(x - mx) : 9999;
      const ratio = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
      const alpha = BASE_LINE_ALPHA + (ACTIVE_LINE_ALPHA - BASE_LINE_ALPHA) * ratio;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${COLOR_RGB}, ${alpha})`;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h + GRID_SIZE; y += GRID_SIZE) {
      const dist = isActive ? Math.abs(y - my) : 9999;
      const ratio = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
      const alpha = BASE_LINE_ALPHA + (ACTIVE_LINE_ALPHA - BASE_LINE_ALPHA) * ratio;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${COLOR_RGB}, ${alpha})`;
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Update & Draw Beams
    beams.current.forEach((beam, index) => {
      beam.position += beam.velocity;
      const isH = beam.axis === "h";
      const limit = isH ? w : h;

      if (beam.position > limit + beam.length) {
        beams.current.splice(index, 1);
        return;
      }

      const x1 = isH ? beam.position - beam.length : beam.coordinate;
      const y1 = isH ? beam.coordinate : beam.position - beam.length;
      const x2 = isH ? beam.position : beam.coordinate;
      const y2 = isH ? beam.coordinate : beam.position;

      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, "rgba(255, 255, 255, 0)");
      grad.addColorStop(1, `rgba(${COLOR_RGB}, ${beam.alpha})`);
      
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = grad;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = `rgba(${COLOR_RGB}, ${beam.alpha})`;
      ctx.arc(x2, y2, 1.2, 0, Math.PI * 2);
      ctx.fill();
    });

    if (Math.random() < 0.02) spawnBeam(w, h);

    // Glows
    if (isActive) {
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, INFLUENCE_RADIUS);
      g.addColorStop(0, `rgba(${COLOR_RGB}, 0.06)`);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    // Vignette
    const vig = ctx.createRadialGradient(w/2, h/2, w * 0.2, w/2, h/2, w * 0.9);
    vig.addColorStop(0, "rgba(255, 255, 255, 0)");
    vig.addColorStop(1, "rgba(255, 255, 255, 0.8)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);

    ctx.restore();
  }, [spawnBeam]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }, []);

  // 3. Central Animation Loop
  useEffect(() => {
    resize();
    
    // Create a stable animation loop that doesn't rely on 'draw' being declared yet
    const animate = () => {
      draw();
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    const handleMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseTarget.current = { x, y };
      
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      if (Math.random() < 0.05) spawnBeam(w, h);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, [draw, resize, spawnBeam]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white opacity-40" />
    </div>
  );
};
