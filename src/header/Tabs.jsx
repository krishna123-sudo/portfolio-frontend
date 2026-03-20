// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Tabs() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const roles = [
//         "Frontend Developer",
//         "Backend Developer",
//         "Full Stack Engineer",
//     ];

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % roles.length);
//         }, 2000); // slower = smoother
//         return () => clearInterval(interval);
//     }, []);

//     const tabs = [
//         { name: "profile", path: "/" },
//         { name: "skills", path: "/skills" },
//         { name: "experience", path: "/experience" },
//         { name: "projects", path: "/projects" },
//         { name: "contact", path: "/contact" }
//     ];

//     return (
//         <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 px-6 py-4 flex items-center justify-between">

//             {/* 🔥 Logo + Role */}
//             <div>
//                 <Link to={"/"}>
//                     <h1 className="gradient-text text-2xl md:text-3xl font-bold tracking-wide">
//                         Krishna Sekhar
//                     </h1>

//                     {/* Role Animation */}
//                     <motion.p
//                         key={roles[index]}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="text-sm md:text-base text-gray-400"
//                     >
//                         {roles[index]}
//                     </motion.p>
//                 </Link>
//             </div>

//             {/* 🔥 Tabs */}
//             <div className="hidden md:flex relative bg-base-200/40 p-1 rounded-xl">

//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.path}
//                         onClick={() => navigate(tab.path)}
//                         className={`relative px-4 py-2 rounded-lg capitalize transition-all ${location.pathname === tab.path
//                             ? "text-white"
//                             : "text-gray-400 hover:text-white"
//                             }`}
//                     >
//                         {location.pathname === tab.path && (
//                             <motion.div
//                                 layoutId="activeTab"
//                                 className="absolute inset-0 bg-purple-600 rounded-lg"
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 300,
//                                     damping: 25
//                                 }}
//                             />
//                         )}
//                         <span className="relative z-10">{tab.name}</span>
//                     </button>
//                 ))}
//             </div>

//             {/* 🔥 Mobile Menu (basic) */}
//             <div className="md:hidden">
//                 <button
//                     onClick={() => navigate("/")}
//                     className="text-gray-300"
//                 >
//                     ☰
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Tabs;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Tabs() {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Engineer",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const tabs = [
        { name: "profile", path: "/" },
        { name: "skills", path: "/skills" },
        { name: "experience", path: "/experience" },
        { name: "projects", path: "/projects" },
        { name: "contact", path: "/contact" }
    ];

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false); // close sidebar after click
    };

    return (
        <>
            {/* 🔥 Navbar */}
            <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <Link to={"/"}>
                        <h1 className="gradient-text text-2xl md:text-3xl font-bold">
                            Krishna Sekhar
                        </h1>

                        <motion.p
                            key={roles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm text-gray-400"
                        >
                            {roles[index]}
                        </motion.p>
                    </Link>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden md:flex bg-base-200/40 p-1 rounded-xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab.path}
                            onClick={() => navigate(tab.path)}
                            className={`px-4 py-2 rounded-lg capitalize ${location.pathname === tab.path
                                    ? "bg-purple-600 text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-2xl text-white"
                >
                    ☰
                </button>
            </div>

            {/* 🔥 Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 w-64 h-full bg-gray-900 z-50 p-6 flex flex-col gap-6"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white text-xl self-end"
                            >
                                ✕
                            </button>

                            {/* Tabs */}
                            {tabs.map((tab) => (
                                <button
                                    key={tab.path}
                                    onClick={() => handleNavigate(tab.path)}
                                    className={`text-left text-lg capitalize ${location.pathname === tab.path
                                            ? "text-purple-400 font-semibold"
                                            : "text-gray-300"
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Tabs;