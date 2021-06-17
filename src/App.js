import {
  Topbar,
  Home,
  About,
  Services,
  Process,
  Contact,
  Portfolio,
  OtherServices,
  Testimonials,
  Model,
  Footer
} from "./components/index";
import "./App.scss";

import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
        <Home />
        <About />
        <Services />
        <OtherServices />
        <Process />

        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
