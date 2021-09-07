// import Footer from './Footer';
import Navbar from './Navbar';
import Toplogo from './Toplogo';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      {/* <Toplogo/> */}
  
      {children}
      {/* <Footer /> */}
    </div>
  );
}
