import DeminingSolutionsPage from "./components/DeminingSolutionsPageFixed";
import AboutUsPage from "./components/AboutUsPage";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      {currentPage === "about" ? (
        <AboutUsPage onNavigate={handleNavigation} />
      ) : (
        <DeminingSolutionsPage onNavigate={handleNavigation} />
      )}
    </div>
  );
}
