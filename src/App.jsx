import "./App.css";
import { About } from "./components/About";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Video } from "./components/Video";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Video />
        <About />
        <Description />
      </main>
    </div>
  );
}

export default App;
