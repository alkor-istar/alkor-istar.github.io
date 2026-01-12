import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Greet from "./components/greet/Greet";
import ProjectsSection from "./components/projects/ProjectSection";
import About from "./components/about/About";
import RecommendationsSection from "./components/recomendations/RecomendationSection";
import SkillSection from "./components/skills/SkillSection";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main >
        <Greet />
        <About />
        <ProjectsSection />
        <SkillSection />
        <RecommendationsSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
