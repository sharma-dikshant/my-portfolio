import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Project from "../components/project/Project";
function Homepage() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
