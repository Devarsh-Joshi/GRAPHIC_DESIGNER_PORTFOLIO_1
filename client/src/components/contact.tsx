import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-6xl md:text-9xl font-display font-bold mb-8 uppercase tracking-tighter">
                Let's Talk
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Have a project in mind? Let's create something extraordinary together.
            </p>
            
            <a href="mailto:hello@alexmorgan.design" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                Start a Project <ArrowRight />
            </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/10 text-sm text-muted-foreground font-mono">
            <div>© 2026 Alex Morgan. All rights reserved.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
      </div>
    </section>
  );
}
