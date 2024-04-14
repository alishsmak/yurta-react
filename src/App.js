import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Log from "./pages/Log";
import Letter from "./pages/Letter";
import Forum from "./pages/Forum";
import "./App.css";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/log" element={<Log />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
