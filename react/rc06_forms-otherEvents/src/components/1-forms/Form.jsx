import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {

        setUsername (e.target.value)

    }

    const handleSubmit = (e) => {
      e.preventDefault()  //* sayfa yenilenmesini engeller. default davranisi engelle

      alert (`Username: ${username} Email: ${email} Password: ${password}`)
      setEmail('')
      setUsername('')
      setPassword('')
      
    }


  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center text-success">FORMS IN REACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="username"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"

             //* oncheange event inputun degeri her degistiiginde tetiklenir. bizde yazdgimiz event handler aracilgii ile statei guncelleyebilmis oluruz. 

            onChange={handleUsername}
            value={username}  //* inputlara baslangi degeri vermemizi saglar. onchange ilek ullaniriz ve statei guncelleyebiliriz.
          />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className='text-danger'>{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password"
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="text-center">

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default Form;
