import React, {useState} from 'react';

const KeyboardClipboard = () => {
  const [content, setContent] = useState ('');

  const handelKeyDown = e => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert ('Please don´t use numbers');
      e.preventDefault ();
    }
  };
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

      <textarea  className='form-control' name="" id=""  cols="30" rows="10"/>
    </div>
  );
};

export default KeyboardClipboard;
