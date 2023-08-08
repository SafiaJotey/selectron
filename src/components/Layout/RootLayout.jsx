import Footer from './Footer';
import Navbar from './Navbar';

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
