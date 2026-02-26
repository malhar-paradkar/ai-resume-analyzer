import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import Stats from "../components/Stats.jsx";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import { motion } from "framer-motion";

const Landing = () => {
    return (
        <div className="relative bg-zinc-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] -z-20" />
            <ParticlesBackground />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2 }}
              className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-3xl"
            />

            <Navbar />

            <div className="ptp-24 relative z-10">
                <Hero />
                <About />
                <Features />
                <Stats />
            </div>
        </div>
    );
};

export default Landing;