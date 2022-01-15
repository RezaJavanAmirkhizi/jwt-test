import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';

function SignIn(){

    const [values, setValues] = React.useState({
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
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            autoComplete="current-password"
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
            <button>Sign in</button>
        </div>
    )
    
}

export default SignIn;