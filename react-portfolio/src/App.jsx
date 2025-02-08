import styles from "./App.module.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import EmailForm from "./components/EmailForm/EmailForm";
import References from "./components/References/References";
function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Education />
      <Projects />
      <Experience />
      <References />
      <Contact />
      {/* <EmailForm></EmailForm> */}
    </div>
  );
}

export default App;
