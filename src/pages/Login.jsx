import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  function handleLogin(e){

    e.preventDefault();

    if(email === "" || password === ""){
      setError("Please fill all fields");
      return;
    }

    axios.post("https://netflix-login-befn.onrender.com/login",{
      email: email.trim().toLowerCase(),
      password
    })
    .then(res=>{
      alert(res.data.message);
      navigate("/dashboard");
    })
    .catch(err=>{
      setError("Invalid login credentials");
    });

  }

  return(

    <div className="login-container">

      <h1>NETFLIX</h1>

      <form onSubmit={handleLogin}>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>

      </form>

    </div>

  )

}

export default Login;