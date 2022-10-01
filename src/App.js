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
        <Route path="/destinations" element={ <p>destinations</p>} />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/partner" element={ <p>partner</p>} />
        <Route path="/login" element={ <p>login</p>} />
        <Route path="/register" element={ <p>register</p>} />
      </Routes>
    </>
  );
}

export default App;
