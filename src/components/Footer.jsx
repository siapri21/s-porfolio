import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Vague du haut */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,40 C120,80 360,0 720,20 1080,40 1320,60 1440,20 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Contenu */}
      <div className="pt-24 pb-10 px-6 text-center bg-gradient-to-r from-[#2b174f] via-[#1f2a64] to-[#1b1b3a] text-white">
        <h2 className="text-orange-400 text-xl font-semibold mb-6 tracking-wide">
         siapri-dev
        </h2>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/ouattara-siapri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="https://github.com/siapri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="GitHub"
          >
            <Github size={26} />
          </a>
        </div>

        <div className="w-3/4 mx-auto border-t border-white/20 mb-4" />

        <p className="text-xs text-white/60">
          © Copyright 2025 Siapri Ouattara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
