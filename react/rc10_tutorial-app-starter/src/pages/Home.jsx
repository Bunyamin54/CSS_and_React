import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

  const [tutorials, setTutorials] = useState([])  

  const BASE_URL =" https://tutorial-api.fullstack.clarusway.com/tutorials/"


  const getTutorials = async () => {

    try {
      // const res = await axios(BASE_URL)
      //  setTutorials(res.data)
      const {data} = await axios(BASE_URL)
       setTutorials(data)
    } catch (error) {
      console.log(error)
    }
  
  }

   console.log(tutorials)

    //  * mount asamasinda istek atiliyor ve gelen veri setTutorial ile tutorial state'ine set ediliyor
   useEffect(() => {
    getTutorials()
   }, [])


  return (
    <>
      <AddTutorial  getTutorials= {getTutorials} />
      <TutorialList tutorials= {tutorials } />
    </>
  );
};

export default Home;
