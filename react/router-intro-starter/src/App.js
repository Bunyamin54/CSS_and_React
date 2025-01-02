import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <Nav />
      <Home />
      <Instructors />
      <Contact />
      <NotFound />
      <Footer />
   
    </BrowserRouter>
  );
}

export default App;
