import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
