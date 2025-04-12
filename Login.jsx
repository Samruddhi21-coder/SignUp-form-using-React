import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Form.css"; 
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";


function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let nav = useNavigate();
  let handleSubmit=(event)=>{
    event.preventDefault();
    
      let auth=getAuth();
      signInWithEmailAndPassword(auth,username,password)
      .then(()=>
      {
        alert("login succesful");
        nav("/home")
      })
      .catch((error)=>alert(error))
      
      .finally(()=>
      {
        setUsername("");
        setPassword("");
        
        
      })
    
  }
  

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit = {handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>

      
          <div className="button-group">
            <button 
              type="button" 
              onClick={()=>nav("/forgot")}
            
              style={{ backgroundColor: "#ffc107" }}
            >
              Forgot Password
            </button>

            <button 
              type="button" 
             
              style={{ backgroundColor: "#28a745" }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;