import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "VIRTUAL_VOID",
    category: "EXPERIMENTAL_WEB",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
    accent: "text-primary"
  },
  {
    id: 2,
    title: "NEO_KINETIC",
    category: "MOTION_GRAPHICS",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop",
    accent: "text-secondary"
  },
  {
    id: 3,
    title: "CYBER_TYPE",
    category: "TYPOGRAPHY",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    accent: "text-white"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-48 px-6 md:px-12 bg-background relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col mb-48">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 uppercase tracking-widest">Artifacts_v4.0</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none"
            >
              Selected <br /> <span className="text-stroke-2">Works</span>
            </motion.h2>
        </div>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex flex-col gap-12 group relative",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="relative flex-[1.5] overflow-hidden bg-black aspect-video group-hover:shadow-[0_0_50px_rgba(75,255,50,0.15)] transition-shadow duration-700">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border border-white/5 group-hover:border-primary/50 transition-colors pointer-events-none"></div>
                
                {/* Floating Meta Data */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/50 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p>COORD: 52.5200° N, 13.4050° E</p>
                  <p>STATUS: DEPLOYED_ARTIFACT</p>
                  <p>HASH: {Math.random().toString(16).substring(2, 8)}</p>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-mono text-primary text-sm mb-4">ARTIFACT_NO.0{index + 1}</span>
                <h3 className={cn("text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6", project.accent)}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-tight border-l-2 border-primary pl-6 py-2 italic font-medium">
                  Exploring the intersection of brutalist architecture and digital interface mechanics.
                </p>
                <div className="flex items-center gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{project.category}</span>
                  <div className="h-[1px] w-12 bg-white/10"></div>
                  <button className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">View_Case</button>
                </div>
              </div>

              {/* Background Index Number */}
              <div className="absolute -top-24 -left-12 text-[20vw] font-black text-white/5 select-none pointer-events-none z-[-1]">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper for conditional classes if not already available
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
