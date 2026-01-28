import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import GrainOverlay from "./grain-overlay";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <GrainOverlay />
      
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-2xl" : "bg-transparent"
      )}>
        <Link href="/">
          <a className="text-xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity">
            ALEX MORGAN
          </a>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
            <span className="text-sm font-mono cursor-pointer">MENU</span>
        </div>
      </nav>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        className="fixed bottom-8 right-8 z-40 hidden md:block mix-blend-difference pointer-events-none"
      >
        <div className="h-24 w-[1px] bg-white mx-auto mb-4 animate-bounce"></div>
        <span className="writing-vertical-rl text-xs font-mono text-white tracking-widest">
          SCROLL
        </span>
      </motion.div>
    </div>
  );
}
