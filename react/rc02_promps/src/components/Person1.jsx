
import Name from './Name'

const Person1 = (props) => {
  console.log(props)

    const  {name, img, color} = props
     //* destructuring ile props objesinden name, img ve color değişkenlerini çıkartma işlemi yapıldı.
  return (

         <div>
          <Name name={name} />
          <img src={img} alt="cat-img" />
          <p>Color : {color}</p>
         </div>

    // <div>
  
      
    //   <Name name={props.name} />
    
    //  <img src={props.img} alt="cat-img" />

    //   <p>Color : {props.color}</p>

    // </div>
  )
}

export default Person1
