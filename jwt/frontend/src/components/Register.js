import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';


function SignUp() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        showPassword: false,
      });

      let history = useNavigate();
      
      const register = () => {
        axios.post('http://localhost:8000/register/', {
          first_name: '',
          last_name: '',
          username: values.username,
          email: '',
          password: values.password

        }).then(function (response) {
          history("/SignIn")
        })
        .catch(function (error) {
          console.log(error);
        });

      }
    
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
          <h2>Sign up</h2> 
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
            <TextField
            id="outlined-repeatPassword-input"
            label="Repeat Password"
            type={values.showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            onChange={(e) => setValues({...values, repeatPassword: e.target.value})}
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
            <button onClick={() => register()}>Sign up</button>
        </div>
    )
}

export default SignUp;