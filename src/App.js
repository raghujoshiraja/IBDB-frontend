import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toast";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-14 xl:px-16 my-10 gap-3">
        <Switch>
          <Route path="/books" exact component={Books} />
          <Route path="/authors" exact component={Authors} />
          <Redirect from="*" to="/books"/>
        </Switch>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
