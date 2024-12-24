import React, { useState } from 'react'

const KeyboardClipboard = () => {

 const [ content, setContent] = useState("")



  return (

    <div className='container'>
     
     
      <h2 className='text-center'>Keyboard-Clipboard</h2>
     
     
      <input type="text" className='form-control'

       onChange={(e) => {
        
        // e.target.value = e.target.value.toUpperCase()
     
        
        setContent(e.target.value.toLocaleUpperCase())}}
        
        value={content}
        
        />
     
     
     
      <div className='mt-4'>
        <h3>Copied Content</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default KeyboardClipboard
