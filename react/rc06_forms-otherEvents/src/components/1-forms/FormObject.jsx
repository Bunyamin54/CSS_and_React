import {useState} from 'react';

const FormObject = () => {
  

 const [formData , setFormData] = useState({
 
  username: '',
  email: '',
  password: ''
  });


  const {username , email, password} = formData;




  const handleSubmit = e => {
    e.preventDefault (); //* sayfa yenilenmesini engeller. default davranisi engelle

    alert (`Username: ${username} Email: ${email} Password: ${password}`);


    setFormData({username: '', email: '', password: ''}); //* formu submit ettikten sonra inputlari bosaltir.
    
  
  };

   

  const handleFormData = (e) => {

    // console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(e.target.id)

     setFormData({...formData, [e.target.name ]:e.target.value}); //* inputun degerini alir ve statei gunceller.})


  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center text-success">FORMS OBJECT IN REACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="username"
            className="form-control"
            id="email"
            name='username'
            aria-describedby="emailHelp"
            //* oncheange event inputun degeri her degistiiginde tetiklenir. bizde yazdgimiz event handler aracilgii ile statei guncelleyebilmis oluruz.

            onChange={handleFormData}
            value={username} //* inputlara baslangi degeri vermemizi saglar. onchange ilek ullaniriz ve statei guncelleyebiliriz.
          />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleFormData}
            value={email}
            name='email'
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
            onChange={handleFormData}
            value={password}
            name='password'
          />
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

export default FormObject;
