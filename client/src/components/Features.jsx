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
    <section id="features" className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap:10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-indigo-500/20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, t: 40 }}
              animate={{ y: [0, -8, 0] }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group m-5 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-indigo-500/20"
            >
              <div className="mb-6 text-indigo-400 group-hover:text-cyan-400 transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;