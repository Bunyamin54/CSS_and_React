import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetails from "./pages/PersonDetails";

function App() {
  return (
    <>
      <Nav />


        <Routes > 
       <Route path="/" element= { <Home />} /> 
       <Route path="paths" element = {<Paths />} />  
       <Route path="people" element = {<People />} />
       <Route path="people/:id" element = {<PersonDetails />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="*" element = {<NotFound />} />
      
           </Routes>
     
      <Footer />
    </>
  );
}

export default App;
