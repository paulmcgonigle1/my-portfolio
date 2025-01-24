import styles from "./App.module.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import ProjectCard from "./components/Projects/ProjectCard.Jsx";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import EmailForm from "./components/EmailForm/EmailForm";
import References from "./components/References/References";
function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience />
      <Projects />
      <References />
      <Contact />
      {/* <EmailForm></EmailForm> */}
      {/* <ProjectCard /> */}
    </div>
  );
}

export default App;
