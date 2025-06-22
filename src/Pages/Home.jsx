import axios from "axios";
import { useState } from "react";
import BackendUrl from "../Config/backendUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackendUrl}/admin/login`;
      const response = await axios.post(api, {
        email:email,
        password:password,
      });
        console.log(response.data)
      // Store admin name from response
      

      toast.success("Login successful", {
        position: "top-center",
        autoClose: 3000,
      });
     localStorage.setItem("adminuser", response.data.admin.name);
      setTimeout(() => {
        navigate('/admin');
      }, 2000);

    } catch (error) {
      console.error("Login failed", error);

      toast.error(error.response?.data?.msg || "Login failed", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="home-wrapper">
        <ToastContainer />
        <form className="form" >
          <div id="login-area">
            <p>Admin Login</p>
          </div>
          <div id="email-area">
            <input
              placeholder="Enter your email"
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
            <br /> <br />
          </div>
          <div id="password-area">
            <input
              placeholder="Enter your password"
              id="password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
          </div>
          <br /><br />
          <div id="footer-area">
            <button  onClick={handleSubmit}>Log In</button>
          </div>
          <div id="background-color" />
          <div id="whitefilter" />
        </form>
      </div>
    </>
  );
};

export default Home;
