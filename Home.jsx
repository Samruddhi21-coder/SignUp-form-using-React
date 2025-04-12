
import { useNavigate } from "react-router-dom";
import "./Form.css"; 
import { getAuth ,signOut } from "firebase/auth";

function Home(){

  let auth = getAuth();
  let nav = useNavigate();

  function handleLogout()
  {
    signOut(auth)
    .then(()=>{
      alert("Sign out successful");
      nav("/");

    })
    .catch((error)=>alert(error))
  }
 

  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to Your Dashboard</h2>
        <p>You are successfully</p>

        <div className="button-group">
          <button onClick={()=>nav("/change")} style={{ backgroundColor: "#28a745" }}>
            Change Password
          </button>

          <button onClick={handleLogout} style={{ backgroundColor: "#dc3545" }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;