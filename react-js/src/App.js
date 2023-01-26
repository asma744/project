import React, {useEffect, useState} from 'react';
import './App.css' ;
import profile from "./images/user.jpg";
import pass from "./images/pass.jpg";
import mail from "./images/mail.jpg";
import validation from './validation';
function App(){
  const [values, setValues]= useState({
    mail: '',
    pass: ''

  })
  const [errors, setError] = useState({})
function handleChange(e){
  setValues({...values, [e.target.mail]: e.target.value})
}
function handleSubmit(e)
{
  e.parventDefault();
  setError(validation(values));
}
useEffect(()=> {
  if(Object.keys(errors).length === 0 && (values.mail !=="" &&values.pass !=="")){
    alert ("Form Submitted");
  }
},[errors])

  return (
    <form onSubmit={handleSubmit}>
    <div className="main">
      
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image" >
              <img src={profile} alt="profile" className="profile"/>
            </div>

          </div>
          <div>
            <h1> Login Pass </h1>
            <div>
              <img src={mail} alt="email" className="email" />
               <input type="text" placeholder="user name " value={values.mail} className="name" name="mail" onChange={handleChange} />
               {errors.name && <p style={{color:"red" , fontSize:"13px"}}>{errors.mail}</p>}
            </div>
            <div className="seconde-input">
              <img src={pass} alt="pass" className="email" />
               <input type="password" placeholder="password " value={values.pass} className="name" name='pass' onChange={handleChange}/>
               {errors.pass && <p style={{color:"red" , fontSize:"13px"}}>{errors.pass}</p>}

            </div>
            <div className="button-log">
            <button type="submit">Login</button>
            </div>
           
              <p className="link">
                <a href="#">Forgot Password</a> Or <a href="#">Sign Up</a>
              </p>
           

          </div>
        </div>

      </div>

    </div>
    </form>
  );
}
export default App;