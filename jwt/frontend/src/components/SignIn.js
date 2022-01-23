import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function SignIn(props){

  let history = useNavigate();

    const login = () => {
      axios.post('http://localhost:8000/login/',{
        username: values.username,
        password: values.password
      })
      .then(function(response) {
        props.setAuthTokens(response.data);
        props.setUser(jwt_decode(response.data.access));
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        history("/");
      })
      .catch(function (error) {
        console.log(error);
      });

      ;
  

      
    }  
    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <div className="signIn-box">
          <h2>Sign In</h2> 
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setValues({...values, username: e.target.value})}/>
          <TextField
            id="outlined-password-input"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            onChange={(e) => setValues({...values, password: e.target.value})}
            endAdornment={
             <InputAdornment position="end">
             <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
              >
               {values.showPassword ? <VisibilityOff /> : <Visibility />}
             </IconButton>
              </InputAdornment>}
            />
            <button onClick={() => login()}>Sign in</button>
        </div>
    )
    
}

export default SignIn;