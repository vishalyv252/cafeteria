import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./navbar/layout";
import About from "./navbar/about";
import Home from "./navbar/home";
import React from "react";
import ReactDOM from "react-dom";

const App=()=>{
  (<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="About" element={<About />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>)
}

ReactDOM.render(<><App/></>,document.getElementById("demo"))