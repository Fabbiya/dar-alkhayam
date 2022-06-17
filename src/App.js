import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Category from "./pages/Category/Category";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import SectionContact from "./components/SectionContact/SectionContact";
import Menu from "./components/Menu/Menu";
import TopBar from "./components/TopBar/TopBar";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div>
       <TopBar />
        <hr style={{ margin: "2px" }} className="text-light" />
        <Menu background="transparent" theme="dark"/>
      <Router>
        <Fragment>
          <Routes>
            {/* <Route path="/post/:slug" element={<Post/>}></Route> */}
            <Route path="/category/:slug" element={<Category />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </Fragment>
      </Router>
      <SectionContact />
    </div>
  );
}

export default App;
