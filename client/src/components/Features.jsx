import { motion } from "framer-motion";
import { FaBrain, FaLayerGroup, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={28} />,
    title: "AI Semantic Matching",
    desc: "Uses AI for deep contextual resume-job analysis."
  },
  {
    icon: <FaLayerGroup size={28} />,
    title: "Hybrid Scoring Engine",
    desc: "Combines rule-based keyword matching with AI reasoning."
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Caching",
    desc: "Blazing-fast performance with intelligent Redis caching."
  }
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 relative"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

              {/* Glass Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-indigo-500/20"
              >
                <div className="mb-6 text-indigo-400 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-cyan-400">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-zinc-800 transition duration-900 group-hover:scale-105">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-800">
                  {feature.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;