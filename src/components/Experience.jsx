// import React from "react";
// import { motion } from "framer-motion";

// const experienceData = [
//     {
//         company: "Techcanopy Software Labs",
//         role: "Software Engineer (SDE1)",
//         duration: "July 2024 – Present",
//         location: "Bengaluru, India",
//         isCurrent: true,
//         description:
//             "Developing scalable full-stack applications using React, Node.js, and modern web technologies. Focused on performance optimization, real-time systems, and efficient state management. Built REST APIs, optimized API calls, implemented lazy loading, and real-time updates using WebSockets. Also worked on secure authentication using AWS Cognito and RBAC.",
//         techStack: [
//             "React",
//             "Redux",
//             "Node.js",
//             "Express.js",
//             "PostgreSQL",
//             "MongoDB",
//             "WebSockets",
//             "AWS",
//             "Tailwind CSS",
//             "Material UI",
//         ],
//     },
//     {
//         company: "Techcanopy Software Labs",
//         role: "Frontend Developer Intern",
//         duration: "Feb 2024 – July 2024",
//         location: "Bengaluru, India",
//         isCurrent: false,
//         description:
//             "Worked on responsive and reusable UI components for a production-grade admin and IoT monitoring system. Gained hands-on experience in React, Tailwind CSS, and real-time data handling in an Agile environment.",
//         techStack: [
//             "React",
//             "JavaScript",
//             "Tailwind CSS",
//             "Material UI",
//         ],
//     },
// ];

// function Experience() {
//     return (
//         <div id="experience" className="min-h-screen px-6 py-20">

//             {/* 🔥 Heading */}
//             <h1 className="text-4xl font-bold mb-16 text-center">
//                 My <span className="gradient-text">Experience</span>
//             </h1>

//             {/* 🔥 Timeline */}
//             <div className="relative max-w-5xl mx-auto">

//                 {/* Vertical Line */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white/10 h-full hidden md:block"></div>

//                 {experienceData.map((exp, index) => {
//                     const isLeft = index % 2 === 0;

//                     return (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 60 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.15 }}
//                             viewport={{ once: true }}
//                             className={`mb-12 flex ${isLeft ? "md:justify-start" : "md:justify-end"
//                                 } justify-center`}
//                         >
//                             <div className="w-full md:w-[45%] relative">

//                                 {/* 🔥 Dot */}
//                                 <span className={`
//                                     absolute top-6 w-4 h-4 bg-purple-500 rounded-full border border-white animate-pulse
//                                     ${isLeft ? "md:-right-6" : "md:-left-6"}
//                                     left-[-8px] md:left-auto
//                                 `}></span>

//                                 {/* 🔥 Card */}
//                                 <motion.div
//                                     whileHover={{ scale: 1.04 }}
//                                     className="p-6 rounded-xl 
//                                     bg-base-100/40 backdrop-blur-lg 
//                                     border border-white/10 
//                                     hover:border-purple-500/50
//                                     hover:shadow-xl hover:shadow-purple-500/20
//                                     transition-all duration-300"
//                                 >

//                                     {/* Top */}
//                                     <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
//                                         <h2 className="text-xl font-semibold">
//                                             {exp.role}
//                                         </h2>

//                                         <span className="text-sm text-gray-400">
//                                             {exp.duration}
//                                         </span>
//                                     </div>

//                                     {/* Company */}
//                                     <p className="text-gray-400 mb-2">
//                                         {exp.company} • {exp.location}
//                                     </p>

//                                     {/* Description */}
//                                     <p className="text-gray-300 mb-4 leading-relaxed">
//                                         {exp.description}
//                                     </p>

//                                     {/* Tech Stack */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {exp.techStack.map((tech, i) => (
//                                             <span
//                                                 key={i}
//                                                 className="badge badge-outline text-xs hover:badge-primary transition"
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* Current badge */}
//                                     {exp.isCurrent && (
//                                         <div className="mt-4">
//                                             <span className="badge badge-success text-xs animate-pulse">
//                                                 Current
//                                             </span>
//                                         </div>
//                                     )}
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Experience;
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
    {
        company: "Techcanopy Software Labs",
        role: "Software Engineer (SDE1)",
        duration: "July 2024 – Present",
        location: "Bengaluru, India",
        isCurrent: true,
        description:
            "Developing scalable full-stack applications using React, Node.js, and modern web technologies. Focused on performance optimization, real-time systems, and efficient state management. Built REST APIs, optimized API calls, implemented lazy loading, and real-time updates using WebSockets. Also worked on secure authentication using AWS Cognito and RBAC.",
        techStack: [
            "React",
            "Redux",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "WebSockets",
            "AWS",
            "Tailwind CSS",
            "Material UI",
        ],
    },
    {
        company: "Techcanopy Software Labs",
        role: "Frontend Developer Intern",
        duration: "Feb 2024 – July 2024",
        location: "Bengaluru, India",
        isCurrent: false,
        description:
            "Worked on responsive and reusable UI components for a production-grade admin and IoT monitoring system. Gained hands-on experience in React, Tailwind CSS, and real-time data handling in an Agile environment.",
        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Material UI",
        ],
    },

    // 🔥 NEW ENTRY ADDED
    {
        company: "Spirinova Technology",
        role: "Summer Intern",
        duration: "June 2023 – August 2023",
        location: "India",
        isCurrent: false,
        description:
            "Worked on Linux-based systems and cloud infrastructure, gaining hands-on experience with AWS services and system-level operations. Learned deployment processes, server management, and basic cloud architecture while supporting development and infrastructure tasks.",
        techStack: [
            "Linux",
            "AWS",
            "Shell Scripting"
        ],
    },
];
function Experience() {
    return (
        <div id="experience" className="min-h-screen px-4 md:px-6 py-16 md:py-20">

            {/* 🔥 Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">
                My <span className="gradient-text">Experience</span>
            </h1>

            <div className="relative max-w-5xl mx-auto">

                {/* 🔥 Vertical Line (left on mobile, center on desktop) */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-[2px] bg-white/10 h-full"></div>

                {experienceData.map((exp, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`mb-10 flex 
                                ${isLeft ? "md:justify-start" : "md:justify-end"}
                                justify-start`}
                        >
                            <div className="w-full md:w-[45%] relative pl-8 md:pl-0">

                                {/* 🔥 Dot */}
                                <span
                                    className={`absolute top-5 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border border-white animate-pulse
                                    left-[-2px] md:left-auto
                                    ${isLeft ? "md:-right-6" : "md:-left-6"}
                                `}
                                ></span>

                                {/* 🔥 Card */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="p-4 md:p-6 rounded-xl 
                                    bg-base-100/40 backdrop-blur-lg 
                                    border border-white/10 
                                    hover:border-purple-500/50
                                    hover:shadow-lg hover:shadow-purple-500/20
                                    transition-all duration-300"
                                >
                                    {/* Top */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
                                        <h2 className="text-lg md:text-xl font-semibold">
                                            {exp.role}
                                        </h2>

                                        <span className="text-xs md:text-sm text-gray-400">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    {/* Company */}
                                    <p className="text-gray-400 text-sm md:text-base mb-2">
                                        {exp.company} • {exp.location}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm md:text-base mb-3 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="badge badge-outline text-[10px] md:text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Current */}
                                    {exp.isCurrent && (
                                        <div className="mt-3">
                                            <span className="badge badge-success text-[10px] md:text-xs">
                                                Current
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;