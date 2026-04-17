import React from 'react'
import Container from '../Container';

type Props = {
    data: {
        impacts: {
            value: string;
            label: string;
        }[];
    };
}
const Impacts = ({ data }: Props) => {
    return (
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <Container className="relative z-10">
          <div className="text-center mb-24">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-[#09358c] mb-6 block">THE TAPITO IMPACT</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">Metrics that <span className="text-[#06dcc3]">Matter</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {data.impacts.map((impact: any, i: number) => (
              <div key={i} className="text-center group">
                <div className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 group-hover:from-[#05a0ec] group-hover:to-[#06dcc3] transition-all duration-700">
                  {impact.value}
                </div>
                <p className="text-xl text-slate-400 font-medium tracking-tight px-8">{impact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
}

export default Impacts