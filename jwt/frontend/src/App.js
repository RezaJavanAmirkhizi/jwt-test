import "../src/styles/app.scss";
import Nav from "../src/components/Nav";
import SignIn from "../src/components/SignIn";
import SignUp from "./components/Register";
import Home from "../src/components/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="container">

       <Nav user={false} />

       <div className="pages">
         <Routes>
           <Route exact path="/" element={<Home user={false} />} />
           <Route exact path="/SignIn" element={<SignIn />} />
           <Route exact path="/SignUp" element={<SignUp />} />
         </Routes>

       </div>   
    
    </div>


  

  )
 
}

export default App;
