import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <main>
      <h1 className="text-base border font-bold underline">
      Hello world!
    </h1>
    
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;