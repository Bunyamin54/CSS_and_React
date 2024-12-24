import React from 'react'

const Form = () => {
  return (
    
 <div className='container mt-4'>
<h2 className='mb-3 text-center text-success'>FORMS IN REACT</h2>
      <form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
      />
    </div>
     <div className='text-center'>

    <button type="submit" className="btn btn-success">
      Submit
    </button>
     </div>
  </form>

 </div>

  
  )
}

export default Form
