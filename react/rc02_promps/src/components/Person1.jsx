
import Name from './Name'

const Person1 = (props) => {
  console.log(props)
  return (
    <div>
  
       <Name/>
    
     <img src={props.img} alt="cat-img" />

      <p>Color : {props.color}</p>

    </div>
  )
}

export default Person1
