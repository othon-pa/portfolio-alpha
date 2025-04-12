import "./App.css";
import Navbar from "./components/navbar";
import IntroductionSection from "./sections/introduction";
import ProjectsSection from "./sections/projects";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <IntroductionSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
