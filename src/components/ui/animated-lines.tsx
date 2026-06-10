import { motion } from "framer-motion";

const AnimatedLines = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.2]" 
             style={{ 
               backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        {[10, 33.33, 66.66, 90].map((left, idx) => (
          <div 
            key={left}
            className="absolute top-0 bottom-0 w-px opacity-30"
            style={{ 
              left: `${left}%`,
              backgroundImage: 'linear-gradient(to bottom, #ccc 4px, transparent 1px)',
              backgroundSize: '1px 8px',
              backgroundRepeat: 'repeat-y'
            }}
          >
            <motion.div
              initial={{ top: "-20%" }}
              animate={{ top: "120%" }}
              transition={{ 
                duration: 4 + idx * 0.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: idx * 0.8
              }}
              className="absolute left-0 w-[1px] h-[200px] bg-[#09358c] opacity-100"
            />
          </div>
        ))}
        {[20, 50, 80].map((top, idx) => (
          <div 
            key={top}
            className="absolute left-0 right-0 h-px opacity-30"
            style={{ 
              top: `${top}%`,
              backgroundImage: 'linear-gradient(to right, #ccc 4px, transparent 1px)',
              backgroundSize: '8px 1px',
              backgroundRepeat: 'repeat-x'
            }}
          >
            <motion.div
              initial={{ left: "-20%" }}
              animate={{ left: "120%" }}
              transition={{ 
                duration: 5 + idx * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: idx * 0.8
              }}
              className="absolute top-0 h-[1px] w-[200px] bg-[#09358c] opacity-100"
            />
          </div>
        ))}
        {[
          { top: '20%', left: '10%' },
          { top: '20%', left: '33.33%' },
          { top: '20%', left: '66.66%' },
          { top: '20%', right: '9.3%' },
          { top: '50%', left: '10%' },
          { top: '50%', right: '9.3%' },
          { bottom: '18.8%', left: '10%' },
          { bottom: '18.8%', left: '33.33%' },
          { bottom: '18.8%', left: '66.66%' },
          { bottom: '18.8%', right: '9.3%' },
        ].map((pos, i) => (
          <div 
            key={i} 
            className="absolute w-3 h-3 border border-slate-300 bg-white rotate-45 z-10 -translate-x-1/2 -translate-y-1/2 hidden md:block"
            style={pos}
          />
        ))}
      </div>
    )
}
export default AnimatedLines;