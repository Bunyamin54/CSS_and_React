import { Outlet } from "react-router-dom";
import About from "../components/About";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      <h1>Home Page</h1>
      {/* <About />
      <Courses /> */}
       {/* //* Nested yapi icinde kullandiigmiz child componetleri outlet componenti ile sergiliyoruz  */}
      <Outlet />
    </div>
  );
};

export default Home;
