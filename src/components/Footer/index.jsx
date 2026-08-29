import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiArrowRight } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-brand-surface dark:bg-slate-900 text-brand-espresso dark:text-brand-linen py-16 px-6 font-light transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand details */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-2xl font-extralight tracking-[0.15em] text-brand-espresso dark:text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Fashion<span className="text-brand-tan font-semibold">Hub</span>
          </Link>
          <p className="text-xs text-brand-muted dark:text-slate-400 leading-relaxed max-w-xs">
            Crafting luxury, organic, and premium apparel designed for slow fashion, modern silhouettes, and meticulous tailoring.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="text-brand-muted hover:text-brand-espresso dark:hover:text-white transition-colors p-2 border border-brand-border/60 hover:border-brand-espresso dark:border-slate-700 dark:hover:border-white rounded-full"
              aria-label="Instagram"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-brand-muted hover:text-brand-espresso dark:hover:text-white transition-colors p-2 border border-brand-border/60 hover:border-brand-espresso dark:border-slate-700 dark:hover:border-white rounded-full"
              aria-label="Pinterest"
            >
              <FaPinterestP className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-brand-muted hover:text-brand-espresso dark:hover:text-white transition-colors p-2 border border-brand-border/60 hover:border-brand-espresso dark:border-slate-700 dark:hover:border-white rounded-full"
              aria-label="Facebook"
            >
              <FiFacebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-brand-muted hover:text-brand-espresso dark:hover:text-white transition-colors p-2 border border-brand-border/60 hover:border-brand-espresso dark:border-slate-700 dark:hover:border-white rounded-full"
              aria-label="Twitter"
            >
              <FiTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Collections links */}
        <div>
          <h3 className="text-brand-espresso dark:text-white text-xs uppercase tracking-[0.2em] font-semibold mb-5">
            Collections
          </h3>
          <div className="flex flex-col space-y-2.5 text-xs text-brand-muted dark:text-slate-400">
            <Link to="/shop?category=Women" className="hover:text-brand-tan transition-colors">
              Women's Atelier
            </Link>
            <Link to="/shop?category=Men" className="hover:text-brand-tan transition-colors">
              Men's Sartorial
            </Link>
            <Link to="/shop?category=Kids" className="hover:text-brand-tan transition-colors">
              Luxury Kids
            </Link>
            <Link to="/shop?category=Premium" className="hover:text-brand-tan transition-colors">
              Exclusive & Limited
            </Link>
          </div>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-brand-espresso dark:text-white text-xs uppercase tracking-[0.2em] font-semibold mb-5">
            Bespoke Services
          </h3>
          <div className="flex flex-col space-y-2.5 text-xs text-brand-muted dark:text-slate-400">
            <a href="#" className="hover:text-brand-tan transition-colors">
              Styling Appointments
            </a>
            <a href="#" className="hover:text-brand-tan transition-colors">
              Corporate Gifting
            </a>
            <a href="#" className="hover:text-brand-tan transition-colors">
              Shipping & Custom Duties
            </a>
            <a href="#" className="hover:text-brand-tan transition-colors">
              Lifetime Care & Repair
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-brand-espresso dark:text-white text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            Private Newsletter
          </h3>
          <p className="text-xs text-brand-muted dark:text-slate-400 leading-relaxed mb-4">
            Subscribe to receive exclusive access to capsule collection releases, private sales, and fashion editorials.
          </p>
          <form onSubmit={handleSubscribe} className="relative border-b border-brand-muted/50 focus-within:border-brand-espresso dark:focus-within:border-white transition-colors py-2 flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent text-xs w-full focus:outline-none pr-10 text-brand-espresso dark:text-white placeholder-brand-muted/70 tracking-wider"
            />
            <button
              type="submit"
              className="absolute right-0 text-brand-muted hover:text-brand-tan p-1 transition-colors"
              aria-label="Submit email subscription"
            >
              <FiArrowRight className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <p className="text-[10px] text-brand-tan font-mono tracking-widest mt-3 animate-pulse uppercase">
              Welcome to the Atelier.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-border/60 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-brand-muted dark:text-slate-500 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} FASHIONHUB INC. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-tan transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brand-tan transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-brand-tan transition-colors">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
