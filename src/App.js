import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-14 xl:px-16 my-10 gap-3">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/authors" exact component={Authors} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
