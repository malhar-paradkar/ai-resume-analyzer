import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-3xl opacity-30"></div>

      {/* Left Branding Section */}
      <div className="hidden md:flex w-1/2 flex-col justify-center px-20">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold leading-tight"
        >
          Welcome Back to{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            ResumeAI
          </span>
        </motion.h1>

        <p className="mt-6 text-zinc-400 text-lg">
          Optimize resumes. Beat ATS systems. Land more interviews.
        </p>
      </div>

      {/* Right Login Card */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Login
          </h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 rounded-xl font-medium transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30">
              Sign In
            </button>
          </div>

          <p className="mt-6 text-center text-zinc-400 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-cyan-400 transition"
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;