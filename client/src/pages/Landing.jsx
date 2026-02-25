import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";

const Landing = () => {
    return (
        <div className="bg-zinc-950 text-white">
            <Navbar />
            <Hero />
            <Features />
        </div>
    );
};

export default Landing;