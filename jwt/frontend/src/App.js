import "../src/styles/app.scss";
import Nav from "../src/components/Nav";
import SignIn from "../src/components/SignIn";
import SignUp from "./components/Register";
import Home from "../src/components/Home";
import {Route, Routes} from "react-router-dom";
import {useState} from 'react';
import jwt_decode from "jwt-decode";

function App() {

  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

  return (
    <div className="container">

       <Nav user={false} />

       <div className="pages">
         <Routes>
           <Route exact path="/" element={<Home user={user} setUser={setUser} authTokens={authTokens} setAuthTokens={setAuthTokens} />} />
           <Route exact path="/SignIn" element={<SignIn setUser={setUser} setAuthTokens={setAuthTokens} />} />
           <Route exact path="/SignUp" element={<SignUp />} />
         </Routes>

       </div>   
    
    </div>


  

  )
 
}

export default App;
