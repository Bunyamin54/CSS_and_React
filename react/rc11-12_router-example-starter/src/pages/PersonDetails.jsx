import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PersonDetails = () => {
   let {state: person} = useLocation();
   let navigate = useNavigate();  
   
  return (
    
     <div className="container text-center mt-4">
     <h3>
       { person?.first_name} {person?.last_name}
</h3>
        <img class  = "rounded" src = {person?.avatar} alt = ""  />
         <p> {person?.email} </p>

         <div> 

   <button  onClick={() => navigate ("/")} className='btn btn-success me-2'>Go Home  </button>
   <button  onClick={() => navigate ("-1")} className='btn btn-warning me-2'>Go Back  </button>

         </div>
          
        
   </div>

 
   
    
  )
}

export default PersonDetails
