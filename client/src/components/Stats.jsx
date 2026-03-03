import { motion } from "framer-motion";

const stats = [
  { value: "95%", label: "ATS Simulation Accuracy" },
  { value: "2x", label: "Faster Resume Optimization" },
  { value: "AI + Rules", label: "Hybrid Scoring Engine" }
];

const Stats = () => {
    return (
        <section id="stats" className="py-32 px-6 dark:bg-zinc-900 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16">
                    Impact
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{opacity: 0, scale: 0.8}}
                          whileInView={{opacity: 1, scale: 1}}
                          transition={{delay: index * 0.2}}
                          viewport={{once: true}}
                          className="dark:bg-zinc-800 p-10 rounded-2xl border border-zinc-400 dark:border-zinc-900 dark:transition shadow-md"
                        >
                            <h3 className="text-4xl font-bold dark:text-indigo-400 mb-4">
                                {stat.value}
                            </h3>

                            <p className="text-zinc-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;