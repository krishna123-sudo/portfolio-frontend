import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
    { name: "JavaScript", level: "Advanced", category: "frontend" },
    { name: "React", level: "Advanced", category: "frontend" },
    { name: "Redux", level: "Advanced", category: "frontend" },
    { name: "HTML", level: "Advanced", category: "frontend" },
    { name: "CSS", level: "Advanced", category: "frontend" },
    { name: "Tailwind CSS", level: "Advanced", category: "frontend" },
    { name: "Material UI", level: "Intermediate", category: "frontend" },

    { name: "Node.js", level: "Advanced", category: "backend" },
    { name: "Express.js", level: "Advanced", category: "backend" },
    { name: "REST APIs", level: "Advanced", category: "backend" },

    { name: "MongoDB", level: "Advanced", category: "database" },
    { name: "PostgreSQL", level: "Intermediate", category: "database" },
    { name: "Redis", level: "Intermediate", category: "database" },

    { name: "AWS", level: "Intermediate", category: "devops" },
    { name: "Docker", level: "Intermediate", category: "devops" },
    { name: "Nginx", level: "Intermediate", category: "devops" },
    { name: "PM2", level: "Intermediate", category: "devops" },

    { name: "Git", level: "Advanced", category: "tools" },
    { name: "GitHub", level: "Advanced", category: "tools" },
    { name: "Postman", level: "Advanced", category: "tools" },
];

function Skills() {
    const [active, setActive] = useState("frontend");

    const categories = ["frontend", "backend", "database", "devops", "tools"];

    const filteredSkills = skillsData.filter(
        (skill) => skill.category === active
    );

    return (
        <div id="skills" className="min-h-screen px-4 md:px-6 py-16 md:py-20">

            {/* 🔥 Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
                My <span className="gradient-text">Skills</span>
            </h1>

            {/* 🔥 Tabs (SCROLLABLE ON MOBILE) */}
            <div className="mb-8 md:mb-10 overflow-x-auto no-scrollbar">
                <div className="flex gap-2 w-max bg-base-200/40 p-1 rounded-xl mx-auto">

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`relative px-4 py-2 rounded-lg capitalize whitespace-nowrap ${active === cat
                                ? "text-white"
                                : "text-gray-400"
                                }`}
                        >
                            {active === cat && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-purple-600 rounded-lg"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25
                                    }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 🔥 Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="p-4 md:p-5 rounded-xl 
                            bg-base-100/40 backdrop-blur-lg 
                            border border-white/10 
                            hover:border-purple-500/50
                            hover:shadow-lg hover:shadow-purple-500/20
                            transition-all duration-300"
                        >
                            <h2 className="text-base md:text-lg font-semibold mb-2">
                                {skill.name}
                            </h2>

                            <span
                                className={`badge text-xs md:text-sm ${skill.level === "Advanced"
                                    ? "badge-primary"
                                    : "badge-secondary"
                                    }`}
                            >
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Skills;