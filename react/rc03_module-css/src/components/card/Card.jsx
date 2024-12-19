
import Button from '../button/Button'
import './Card.css'

const Card = ({lang, btn, img}) => {
  return (
    <div>
      <h1 className='title'>{lang}</h1>
       <img className='images' src={img} alt="image"/>
   
      <Button btn={btn}/>
    </div>
  )
}

export default Card
