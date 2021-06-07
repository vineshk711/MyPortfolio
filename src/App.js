import { React } from "react";
import "./styles.css";
import photo from "./data/vinesh.jpeg";
import Navbar from "./components/navbar";
import Card from "./components/card";
import WelcomeInfo from "./components/welcomeInfo";
// import ContactPage from "./components/contactPage";
import ProjectsPage from "./components/projectsPage";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="about-me">
        <Card
          photo={photo}
          containerWidth="50%"
          width="70%"
          subtitle="UNDERGRADUATE STUDENT"
          title="Vinesh Kumar"
          description="Student at IPU, interested in Software Engineering"
        /> 
        <WelcomeInfo/>
      </div>
      <div className="projects">
        <ProjectsPage/>
      </div>
      
    </div>
  );
}
