import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden grid-lines">
      {/* Background with kinetic elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 animate-pulse"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[10vw] md:text-[8vw] font-black leading-[0.75] tracking-tighter uppercase italic select-none">
              Chaos
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 -mt-[1vw]"
          >
             <div className="hidden lg:block h-[1vw] w-[15vw] bg-primary"></div>
             <h1 className="font-display text-[10vw] md:text-[8vw] font-black leading-[0.75] tracking-tighter uppercase select-none text-primary">
               Order
             </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
          >
            <div className="max-w-xl">
              <p className="text-xl md:text-3xl font-bold uppercase tracking-tighter leading-none text-muted-foreground italic">
                A design laboratory crafting high-voltage visual identities and experimental digital artifacts.
              </p>
            </div>
            
            <button className="group relative bg-white text-black px-12 py-6 font-black uppercase text-2xl tracking-tighter hover:bg-primary transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  Explore <ArrowUpRight size={32} />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Vertical sidebar text */}
      <div className="absolute left-6 bottom-12 hidden md:block">
        <span className="font-mono text-xs uppercase tracking-[1em] vertical-rl opacity-40">
          EST. 2026 / VERSION 4.0
        </span>
      </div>
    </section>
  );
}
