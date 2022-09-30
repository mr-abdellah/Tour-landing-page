import "./styles/app.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>hiii home</h1>} />
          <Route path="/about" element={<p>hhhh</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
