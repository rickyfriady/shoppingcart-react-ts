import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ShoppingCartProvider } from './context/useShoppingCartContext';

const Home = lazy(() => import('./pages/Home'));
const MainApp = lazy(() => import('./pages/MainApp'));
const Store = lazy(() => import('./pages/Store'));
const Page404 = lazy(() => import('./pages/Page404'));
const About = lazy(() => import('./pages/About'));

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
