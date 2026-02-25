import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold leading-tight"
                >
                    <TypeAnimation
                        sequence={[
                            "Optimize Your Resume",
                            2000,
                            "Beat ATS Systems",
                            2000,
                            "Get More Interviews",
                            2000
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                        className="block m-6"
                    />
                    with{" "}<span className="bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
                        AI Intelligence
                    </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-zinc-400 text-lg"
                >
                    Built to simulate real ATS systems using hybrid rule-based and AI powered semantic analysis.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dela: 0.5 }}
                  className="mt-8"
                >
                    <a
                     href="#features"
                     className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-90 px-8 py-3 rounded-xl text-transparent bg-clip-text transition shadow-lg"
                    >
                        Explore Features
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;