// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
