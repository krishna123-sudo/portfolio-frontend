import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Profile() {
    const navigate = useNavigate();

    return (
        <div id="profile" className="min-h-screen flex items-center px-6 py-20">

            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* 🔥 Image */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQFXCDPnpGkZUA/profile-displayphoto-crop_800_800/B56ZvVlY6CKIAI-/0/1768814910515?e=1775692800&v=beta&t=qguxjjbGHmtLJcSZOmmgB9zboGZIjcOOD2QO4jEI4jw"
                        alt="Krishna"
                        className="w-72 h-72 object-cover rounded-2xl shadow-2xl 
                        border border-white/10
                        hover:scale-105 transition duration-300"
                    />

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-2xl -z-10"></div>
                </motion.div>

                {/* 🔥 Text */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="gradient-text">
                            Krishna
                        </span>{" "}
                        👋
                    </h1>

                    {/* 🔥 Subtitle */}
                    <h2 className="text-xl mt-3 text-gray-300">
                        Full Stack Engineer • React • Node • AWS
                    </h2>

                    {/* 🔥 Description */}
                    <p className="py-6 text-gray-400">
                        I build scalable web applications, real-time systems, and
                        high-performance APIs. Passionate about clean architecture,
                        performance optimization, and delivering seamless user experiences.
                    </p>

                    {/* 🔥 Buttons */}
                    <div className="flex gap-4 flex-wrap">

                        <button
                            onClick={() => navigate("/projects")}
                            className="btn btn-primary"
                        >
                            View Projects 🚀
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="btn btn-outline"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* 🔥 Social Links */}
                    <div className="flex gap-4 mt-6 text-gray-400">
                        <a href="https://github.com/krishna123-sudo" className="hover:text-white transition">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/krishna-sekhar-087a401b5/" className="hover:text-white transition">
                            LinkedIn
                        </a>
                        {/* <a href="#" className="hover:text-white transition">
                            Twitter
                        </a> */}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default Profile;