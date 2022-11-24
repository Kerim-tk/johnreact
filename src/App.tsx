import React from "react";
import "./App.scss";
import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./pages/Header/Header";
import { Footer } from "./pages/footer/footer";




function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
