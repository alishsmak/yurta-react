import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Log from "./components/Log";
import Letter from "./components/Letter";
import Forum from "./components/Forum";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/log" element={<Log />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;
