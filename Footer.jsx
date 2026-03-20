function Footer() {
    return (
        <footer className="w-full 
      bg-base-100/40 backdrop-blur-xl 
      border-t border-white/10 
      text-gray-400 px-6 py-4 
      flex flex-col md:flex-row 
      items-center justify-between gap-4">

            {/* 🔥 Left */}
            <div className="flex items-center gap-2">
                <span className="gradient-text font-semibold text-lg">
                    Krishna Sekhar
                </span>
                <p className="text-sm opacity-70">
                    © {new Date().getFullYear()} All rights reserved
                </p>
            </div>

            {/* 🔥 Right */}
            <div className="flex gap-5 text-sm">

                <a
                    href="https://github.com/krishna123-sudo"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/krishna-sekhar-087a401b5/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:krishnasekhar8@gmail.com"
                    className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                    Email
                </a>

            </div>
        </footer>
    );
}

export default Footer;