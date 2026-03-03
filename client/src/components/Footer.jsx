import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-zinc-950 border-t dark:border-zinc-800 py-10 px-6 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-400">
          © {new Date().getFullYear()} ResumeAI. Built with MERN + AI.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0 dark:text-zinc-400">
          <a href="https://github.com/malhar-paradkar">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/malhar-paradkar">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;