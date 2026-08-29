import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Video Parallax scale-in
      gsap.fromTo(
        backgroundRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1.0, opacity: 0.8, duration: 2.2, ease: "power4.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-brand-linen text-brand-espresso font-light"
    >
      {/* Background Video with Light Tint Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-brand-linen dark:bg-slate-950 transition-colors duration-500">
        <video
          ref={backgroundRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero_fashion_poster.png"
          className="w-full h-full object-cover opacity-70 select-none pointer-events-none dark:opacity-40"
        >
          <source src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f5df5f1b135ad0c8227b68638b975877c449c25&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-linen via-brand-linen/50 to-brand-linen/80 md:bg-gradient-to-r md:from-brand-linen md:via-brand-linen/60 md:to-transparent dark:from-slate-950 dark:via-slate-950/60 z-10 transition-colors duration-500" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center">
        {/* Sub-header tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-brand-muted dark:text-slate-400 font-semibold mb-6 font-mono"
        >
          MAISON LUXE COUTURE
        </motion.p>

        {/* Title text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-6xl lg:text-7xl font-extralight tracking-widest leading-[1.15] mb-8 uppercase text-brand-espresso dark:text-white"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          ELEGANCE IN EVERY THREAD
        </motion.h1>

        {/* Short luxury tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="max-w-xl text-sm md:text-base text-brand-espresso dark:text-slate-300 tracking-wide leading-relaxed font-light mb-12 opacity-90"
        >
          Explore structured wool overcoats, fluid organic silk draped dresses, and limited-edition designer kimonos hand-selected for the discerning wardrobe.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.2, ease: "backOut" }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            to="/shop"
            className="group px-8 py-4 bg-brand-espresso dark:bg-white text-white dark:text-slate-900 font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 clickable"
          >
            <span>Explore Atelier</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            to="/shop?category=Premium"
            className="px-8 py-4 border border-brand-border dark:border-slate-700 hover:border-brand-espresso dark:hover:border-white text-brand-espresso dark:text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm transition-all hover:scale-105 clickable"
          >
            Limited Edition
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.0, duration: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono mb-2 text-brand-muted dark:text-slate-400">Scroll Down</span>
        <div className="w-[1px] h-8 bg-brand-muted dark:bg-slate-600" />
      </motion.div>
    </div>
  );
};

export default Hero;
