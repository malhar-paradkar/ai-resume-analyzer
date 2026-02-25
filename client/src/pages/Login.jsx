import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="bg-zinc-900/70 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-zinc-800 border border-zinc-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-zinc-800 border border-zinc-700"
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl transition">
          Login
        </button>

        <p className="mt-4 text-center text-zinc-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;