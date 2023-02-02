import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <div className="container mx-auto mb-4">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
