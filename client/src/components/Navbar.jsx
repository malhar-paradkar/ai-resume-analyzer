import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-lg" : "bg-transparent"} `}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white">
                  ResumeAI
                </Link>

                <div className="hidden md:flex space-x-8 text-zinc-300">
                    <a href="#home" className="hover:text-whtie transition">Home</a>
                    <a href="#about" className="hover:text-whtie transition">About</a>
                    <a href="#features" className="hover:text-whtie transition">Features</a>
                </div>

                <Link to="/login" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-white transition">
                    Login
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;