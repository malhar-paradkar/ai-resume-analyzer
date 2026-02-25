import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-zinc-950">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  initial={{opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-10 capitalize"
                >
                    Why we built this?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-zinc-400 text-lg leading-relaxed"
                >
                    Modern hiring systems use Applicant Tracking Systems (ATS) 
                    powered by advanced algorithms. ResumeAI was built to simulate 
                    real-world ATS behavior using a hybrid engine that combines 
                    rule-based keyword matching and Gemini-powered semantic analysis.
                    This allows candidates to optimize resumes intelligently 
                    instead of guessing what recruiters want.
                </motion.p>
            </div>
        </section>
    );
};

export default About;