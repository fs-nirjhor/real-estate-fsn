import Header from "./components/Header/Header";
import Companies from "./components/Companies/Companies";

import "./App.css";

import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
    </div>
  );
}

export default App;
