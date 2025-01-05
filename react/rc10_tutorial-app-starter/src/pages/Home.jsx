import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

  const [tutorial, setTutorial] = useState({
   
  })  

  const BASE_URL =" https://tutorial-api.fullstack.clarusway.com/tutorials/"


  const getTutorials = async () => {
  const data = await axios(BASE_URL)
  console.log(data.data)
  }

   console.log(tutorial)

    //  * mount asamasinda istek atiliyor ve gelen veri setTutorial ile tutorial state'ine set ediliyor
   useEffect(() => {
    getTutorials()
   }, [])


  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
