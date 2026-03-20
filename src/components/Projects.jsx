import React from "react";

const projectsData = [
    {
        title: "WiFi Integration & Multi-User Dashboard Platform",
        description:
            "Developed a scalable WiFi integration platform with role-based dashboards for managing network access, user activity, and analytics. Focused on performance, real-time monitoring, and secure authentication.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Redux",
            "WebSockets",
            "AWS",
            "Nginx",
            "PM2",
        ],
        github: "https://github.com/krishna123-sudo",
        live: "private",
    },
    {
        title: "JampLe Music Streaming Platform",
        description:
            "Built a full-stack music streaming platform with playlist management and seamless playback. Integrated AWS S3 for media storage and optimized backend for performance and scalability.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux",
            "AWS",
            "Nginx",
            "PM2",
        ],
        github: "https://github.com/krishna123-sudo",
        live: "private",
    },
    {
        title: "DevTinder – Developer Matching Platform",
        description:
            "A Tinder-like platform for developers to connect, match, and collaborate. Implemented authentication, profile swiping, and real-time interactions using WebSockets.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "WebSockets",
            "Tailwind CSS",
        ],
        github: "https://github.com/krishna123-sudo",
        live: "private",
    },
    {
        title: "Real-Time Chat Application",
        description:
            "Developed a real-time chat application with instant messaging, socket-based communication, and scalable backend architecture using Node.js and WebSockets.",
        techStack: [
            "React",
            "Node.js",
            "Socket.io",
            "MongoDB",
            "Express.js",
        ],
        github: "https://github.com/krishna123-sudo",
        live: "private",
    },
];

function Projects() {
    return (
        <div id="projects" className="min-h-screen px-6 py-20">

            {/* 🔥 Heading */}
            <h1 className="text-4xl font-bold mb-10 text-center">
                My <span className="gradient-text">Projects</span>
            </h1>

            {/* 🔥 Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projectsData.map((project, index) => (
                    <a key={index} className="hover-3d block cursor-pointer">

                        {/* 🔥 Card */}
                        <div className="p-6 rounded-xl 
              bg-base-100/40 backdrop-blur-lg 
              border border-white/10 
              hover:border-purple-500/40 
              transition-all duration-300 
              flex flex-col justify-between h-full">

                            {/* Title */}
                            <h2 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 mb-4 text-sm">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="badge badge-outline text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-outline hover:scale-105 transition"
                                >
                                    GitHub
                                </a>

                                {project.live !== "private" ? (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-primary"
                                    >
                                        Live
                                    </a>
                                ) : (
                                    <span className="text-xs text-gray-200 flex items-center">
                                        Private
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* 🔥 Required 3D layers */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;