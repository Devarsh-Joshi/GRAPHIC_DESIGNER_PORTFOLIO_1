import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-48 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary"></span>
              The Philosophy
            </h2>
            <p className="text-4xl md:text-6xl font-display font-black leading-tight uppercase tracking-tighter">
              A blend of <span className="text-stroke-2">strategic</span> thinking & artistic <span className="text-primary italic">rebellion</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              We don't just build interfaces; we architect digital emotions. Every pixel is a calculated move in a larger narrative. Our approach is rooted in brutalist honesty and high-voltage precision.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <h4 className="font-mono text-[10px] text-primary uppercase mb-4 tracking-widest">Capabilities</h4>
                <ul className="space-y-2 text-sm font-bold uppercase tracking-tighter">
                  <li>01_UI/UX_Engineering</li>
                  <li>02_Brand_Identity</li>
                  <li>03_Motion_System</li>
                  <li>04_Digital_Artifacts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-primary uppercase mb-4 tracking-widest">Selected_Clients</h4>
                <ul className="space-y-2 text-sm font-bold uppercase tracking-tighter">
                  <li>Nike_Innovation</li>
                  <li>Spotify_Design</li>
                  <li>Linear_App</li>
                  <li>Tech_Crunch</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
