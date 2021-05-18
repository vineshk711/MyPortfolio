import { React } from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Card from "./components/Card";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Card/>
    </div>
  );
}
