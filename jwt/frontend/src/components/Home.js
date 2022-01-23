import {Link} from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useState, useEffect } from 'react';


function Home(props){

    const [notes, setNotes] = useState([]);

    let api = useAxios(props.authTokens, props.setUser, props.setAuthTokens);

    useEffect(() =>{ getNotes()}, [])
  

    let getNotes = async () => {
        api.get('/home/')
        .then(function(response){
            setNotes(...notes, response.data);
        })
        .catch(function(err){
            console.log(err);
        })

    }





    let Home;

    if(props.user){
        Home = (<h2>{
            notes.map((note)=> {
                return(
                    <div key={note.id}>
                    {note.title}
                    <hr/>
                    </div>
                );

            })
            }</h2>)
    }
    else{
        Home = (
            <div className="not-auth">
                <h2>Please Sign in or Sign up to continue</h2>
                <div className="log-box">
                    <li><Link to="/SignIn" className="link">Sign in</Link></li>
                    <li><Link to="/SignUp" className="link">Sign up</Link></li>
                </div>
            </div>
        )
    }


    return(
        <>
           {Home}
        </>
     
    )
}

export default Home;