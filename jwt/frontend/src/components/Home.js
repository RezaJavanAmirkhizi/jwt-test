import {Link} from "react-router-dom";


function Home(props){

    let Home;

    if(props.user){
        Home = (<h2>Hi</h2>)
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