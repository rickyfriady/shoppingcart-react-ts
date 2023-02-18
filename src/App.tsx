import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/useShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import { Index } from "./pages/Index";
import Page404 from "./pages/Page404";
import Store from "./pages/Store";

function App() {
  return (
    <div className="container mx-auto mb-4">
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
