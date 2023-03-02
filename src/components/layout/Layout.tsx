import { ReactNode } from 'react';
import Footer from './Footer';
import { Navbar } from './Navbar';

type LayoutProb = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProb) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
