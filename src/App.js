import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Playground from "./components/Playground/Playground";
// import Modal from "./components/Modal/Modal";
// import { useState } from "react";
// import { Header } from "./components/Header/Header";

function App() {
  console.log(
    "%cThank you for checking up of my portfolio. Wishing you the best for every step in your journey!🎉",
    "color: white; font-weight: 500; font-size:16px"
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <Home />
          <About />
          <Projects />
          <ParallaxComponent />
          <Technologies />
          <Playground />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
