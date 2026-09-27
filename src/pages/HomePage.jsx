import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Intro from "../components/intro/Intro";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import HowIWork from "../components/sections/HowIWork";
import SelectedWork from "../components/sections/SelectedWork";
import SailingLocFeatured from "../components/projects/SailingLocFeatured";
import ProjectTrophenix from "../components/projects/ProjectTrophenix";
import ProjectZypp from "../components/projects/ProjectZypp";
import ProjectPetitPlat from "../components/projects/ProjectPetitPlat";
import ProjectSkillSwap from "../components/projects/ProjectSkillSwap";
import ProjectDosanko from "../components/projects/ProjectDosanko";

import Toolbox from "../components/sections/Toolbox";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("siapri-intro-done") === "1"
  );

  const enter = useCallback(() => {
    sessionStorage.setItem("siapri-intro-done", "1");
    setIntroDone(true);
  }, []);

  useEffect(() => {
    if (!introDone || !location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [introDone, location.hash]);

  return (
    <>
      <AnimatePresence>
        {!introDone ? <Intro key="intro" onEnter={enter} /> : null}
      </AnimatePresence>

      <Navbar visible={introDone} />

      {introDone ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <main>
            <Hero />
            <About />
            <HowIWork />
            <SelectedWork />
            <SailingLocFeatured />
            <ProjectTrophenix />
            <ProjectZypp />
            <ProjectPetitPlat />
            <ProjectSkillSwap />
            <ProjectDosanko />
            <Toolbox />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
}
