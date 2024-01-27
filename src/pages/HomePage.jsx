 import { useState } from "react";
import { Navigate ,useParams} from "react-router-dom";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";
 
function HomePage() {
  console.log(useParams())

  const [loggedIn,setLoggedIn] = useState(true)
  // Navigate is used for redirecting based on a condition
  if(!loggedIn) return <Navigate to='/about'></Navigate>
  else{
    return (
      <div>
        <h1>Home</h1>
        <img src={imgURL} alt="home gif" className="page-img" />
        <a href="/about">Go to About Page</a>
      </div>
    );  
  }
}
 
export default HomePage;
