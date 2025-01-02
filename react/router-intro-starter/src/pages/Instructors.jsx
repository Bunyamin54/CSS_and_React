import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className='p-3'>
    <h1> InstructorsDetail</h1>
    <div className='d-flex flex-column'>

     {/*  // * absolute path  tam adres */}
     <Link to='/instructors/1'>Instructor 1</Link>

     {/*  // * relative path goreceli  */}
     <Link to='2'>Instructor 2</Link>
     <Link to='3'>Instructor 3</Link>
    
    </div>
   </div>
  );
};

export default Instructors;
