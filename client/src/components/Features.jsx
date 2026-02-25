import { motion } from "framer-motion";

const features = [
  {
    title: "AI Semantic Matching",
    desc: "Uses Gemini API for deep contextual resume-job analysis."
  },
  {
    title: "Hybrid Scoring Engine",
    desc: "Combines rule-based keyword matching with AI reasoning."
  },
  {
    title: "Cloud Caching",
    desc: "Redis-powered caching for optimized performance."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;