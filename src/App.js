import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main";
import SectionContact from "./components/SectionContact/SectionContact";
import Menu from "./components/Menu/Menu";
import TopBar from "./components/TopBar/TopBar";
import Services from "./pages/Services/Services";
import Post from "./pages/Post/Post";


function App() {
  return (
    <div >
       <TopBar  />
        <hr style={{ margin: "2px" }} className="text-light" />
        <Menu background="transparent" theme="dark"/>
      <Router>
        <Fragment>
          <Routes>
            {/* <Route path="/post/:slug" element={<Post/>}></Route> */}
            <Route path="/category/:slug" element={<Category />}></Route>
            <Route path="/post/:slug" element={<Post />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </Fragment>
      </Router>
      <SectionContact />
      <footer className="bg-dark text-light">
        <p className="text-center "><small>© Dar Al Khayam General Trading LLC.  All rights reserved. | <a href="tell:+97142501090" className="text-decoration-none">+971 42 50 10 90</a></small></p>
      </footer>
    </div>
  );
}

export default App;
