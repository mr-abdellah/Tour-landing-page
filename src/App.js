import "./styles/app.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>hiii home</h1>} />
        <Route path="/about" element={<p>hhhh</p>} />
      </Routes>
    </>
  );
}

export default App;
