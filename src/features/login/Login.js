import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login';
import { useAuth } from "../../context/auth";



function Login (){
  const { login } = useAuth();


  const onSuccessConnection = (response) => {
    console.log(response.profileObj);
    console.log(response.tokenId);
    login(response.profileObj,  response.tokenId);
  }
  const onFailConnection = (response) => {
    console.log(response);
  }
  
  return (
    <div className="login"> 
      <h1 className="login--label"> Bienvenido </h1>
      <GoogleLogin
      clientId="593691865161-knmluaf7uppg3mr2ltj191kpi90nug02.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccessConnection}
      onFailure={onFailConnection}
      scope="profile"
      icont={true}
      render={renderProps => (
        <button 
        className="login--button" 
        onClick={renderProps.onClick} 
        disabled={renderProps.disabled}>
          <img src={"/google.svg "} />
          <span>Ingresa con google</span>
        </button>
        )}
        cookiePolicy={'single_host_origin'}
        />
    </div>);
    }
    
    export default Login;