import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const  EditTutorial = ({editItem, getTutorials}) => {

  const {id, description: newDescription, title :newTitle} = editItem;
   
  
  const [title, setTitle] = useState ('newTitle');
  const [description, setDescription] = useState ('newDescription');

  // *  componentDidupdate  

  useEffect(() => {
   
     setTitle(newTitle)
     setDescription(newDescription)

  }, [newTitle, newDescription])



  const editTutorial =  async (tutorial) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
   try {

     await axios.put(`${BASE_URL}/${id}/`, tutorial)
     
   } catch (error) {
     console.log(error)
     
   }
   getTutorials()
 }
  
const handleSubmit = (e) =>{
   e.preventDefault()
   editTutorial({title, description})
}



  return (

 
    <div
      className="modal fade"
      id="open-modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title text-danger fs-5" id="exampleModalLabel">
              Edit Tutorial
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setTitle('')
                setDescription('')
              }}



            />
              
          </div>
          <div className="modal-body"> 
          <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={e => setTitle (e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={e => setDescription (e.target.value)}
            required
          />
        </div>
       <div className='text-end'>
       <button type="submit" className="btn btn-success "  data-bs-dismiss="modal">
          Submit
        </button>
       </div>
      </form>
          </div>
        
        </div>
      </div>
    </div>

  
  )
}

export default EditTutorial
