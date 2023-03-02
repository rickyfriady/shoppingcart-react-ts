import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ShoppingCartProvider } from './context/useShoppingCartContext';
import About from './pages/About';
import Home from './pages/Home';
import MainApp from './pages/MainApp';
import Page404 from './pages/Page404';
import Store from './pages/Store';

function App() {
  return (
    <div className="container mx-auto mb-4">
      <ShoppingCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainApp />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Page404 />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Layout>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
