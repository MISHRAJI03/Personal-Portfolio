import React from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <div className="px-4">
          <Navbar />
        </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;