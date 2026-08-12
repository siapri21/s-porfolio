import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/layout/CustomCursor";
import SkipLink from "./components/layout/SkipLink";
import HomePage from "./pages/HomePage";
import SailingLocPage from "./pages/SailingLocPage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        <SkipLink />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets/sailingloc" element={<SailingLocPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
