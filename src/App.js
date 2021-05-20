import { React } from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import WelcomeInfo from "./components/welcomeInfo";
import ContactPage from "./components/contactPage";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="about-me">
        <Card/> 
        <WelcomeInfo/>
      </div>
      <ContactPage/>
    </div>
  );
}
