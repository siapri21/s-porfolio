import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SailingLocCaseStudy from "../components/projects/SailingLocCaseStudy";

export default function SailingLocPage() {
  useEffect(() => {
    document.title = "SailingLoc | Étude de cas | Siapri Ouattara";
    return () => {
      document.title = "Siapri Ouattara | Full-Stack & Mobile Developer";
    };
  }, []);

  return (
    <>
      <Navbar visible />
      <main>
        <SailingLocCaseStudy />
      </main>
      <Footer />
    </>
  );
}
