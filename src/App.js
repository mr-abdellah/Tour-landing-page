import "./styles/app.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<p>hhhh</p>} />
      </Routes>
    </>
  );
}

export default App;
