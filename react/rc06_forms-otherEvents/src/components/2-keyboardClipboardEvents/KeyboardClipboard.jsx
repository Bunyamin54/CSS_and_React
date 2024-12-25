import React, {useState} from 'react';

const KeyboardClipboard = () => {
  const [content, setContent] = useState ('');

  const handelKeyDown = e => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert ('Please don´t use numbers');
      e.preventDefault ();
    }
  };

  const handlePaste = e => {
     console.log(e.target)

     e.target.className = 'form-control border border-danger border-4'
     e.target.style.backgroundColor = 'green'
     
  }
  return (
    <div className="container">

      <h2 className="text-center">Keyboard-Clipboard</h2>

      <input
        type="text"
        className="form-control"
        onChange={e => {
          // e.target.value = e.target.value.toUpperCase()

          setContent (e.target.value.toLocaleUpperCase ());
        }}
        onKeyUp={handelKeyDown}
        value={content}
      />

      <div className="mt-4">
        <h3>Copied Content</h3>
        <p>{content}</p>
      </div>

      <textarea  className='form-control' name="" id=""  cols="30" rows="10" onPaste={handlePaste}/>
    </div>
  );
};

export default KeyboardClipboard;
