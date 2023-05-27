import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout
