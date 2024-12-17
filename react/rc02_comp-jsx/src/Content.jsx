
import adam from "./img/adam.webp";

export const Content = () => {

     //* local style objesi harici bir dosyadan da import edilebilir.

   const parStyle = {

    fontSize: "1.5em",  
    textAlign: "center",
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",

   }


   const imgStyle = {

   borderRadious: "10px",
    width: "400px",
    height: "300px",
    cursor: "pointer",
    margin :"auto",
    display: "block",
    padding: "10px",

   }

  return (<main> 
    
      <h2 style={{color : "white", backgroundColor: "red"}}>React js libary</h2>  
       {/* // * inline css  key value seklinde yazilir  key camelCase seklinde yazilir */}
    
    <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad consequatur nihil cupiditate.</p>  <br />

    <img style={imgStyle} src="https://cdn.pixabay.com/photo/2024/11/29/08/41/family-9232499_640.png" alt="family" />

  <img style={imgStyle}  src="https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_640.jpg" alt="" />
    <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde, explicabo eum magni pariatur libero placeat esse corrupti. Culpa tempora debitis dicta eaque cumque, nobis quos harum. Saepe, quisquam hic.</p> <br />

     <h3 className="content-h3">Bu bir h3 elementir</h3>

      <img src={adam} alt="adam" />

         {/*  //*  jsx icersinde suslu acamamiz lazm  */}
     </main>
  )
}


