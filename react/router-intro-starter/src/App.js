import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstructorsDetail from "./pages/InstructorsDetail";

function App() {
  return (
     <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route  path="/" element= {<Home />}  />   */}
        <Route>  path="/" element= {<Home />}   
          <Route  path ="/" element = {<Home/>} />
          <Route index element = {<About/>}/>
          <Route path = "courses" element = {<Courses/>}/>
         </Route>

        <Route  path="/instructors"  element = {<Instructors />}  />  
        <Route  path="/instructors/:id"  element = {<InstructorsDetail />}  />  
        <Route  path="/contact" element = {<Contact />}  />  
        <Route  path="*" element = {<NotFound />}  />  
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
