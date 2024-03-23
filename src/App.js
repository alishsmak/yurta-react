import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Home from "./components/Home";
import Log from "./components/Log";
import Letter from "./components/Letter";
import "./App.css";
import YurtaHome from "./components/YurtaHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/YurtaHome" element={<YurtaHome/> } />
      </Routes>
    </div>
  );
}

export default App;
