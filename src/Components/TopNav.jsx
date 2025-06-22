import { useState } from "react";
import { Navbar, Container, Nav, Modal, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import BackendUrl from "../Config/backendUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledWrapper = styled.div`
  .login-title {
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-weight: bold;
    font-size: x-large;
  }

  .login-card {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    width: 400px;
    flex-direction: column;
    gap: 35px;
    box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
    border-radius: 8px;
    margin: 0 auto;
  }

  .login-inputBox {
    position: relative;
    width: 250px;
  }

  .login-inputBox input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 1em;
    background: transparent;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
    border-bottom-left-radius: 8px;
  }

  .login-inputBox span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    transform: translateY(-4px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
  }

  .login-inputBox input:valid ~ span,
  .login-inputBox input:focus ~ span {
    transform: translateX(113px) translateY(-15px);
    font-size: 0.8em;
    padding: 5px 10px;
    background: #000;
    letter-spacing: 0.2em;
    color: #fff;
  }

  .login-inputBox input:valid,
  .login-inputBox input:focus {
    border: 2px solid #000;
    border-radius: 8px;
  }

  .login-enter {
    height: 45px;
    width: 100px;
    border-radius: 5px;
    border: 2px solid #000;
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
  }

  .login-enter:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;

const TopNav = () => {
  const [show, setShow] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const navigate = useNavigate();

  const [input, setInput] = useState({ name: "", password: "" });
  const [resetInput, setResetInput] = useState({
    name: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendUrl}/user/userlogin`;

    try {
      let response = await axios.post(api, input);
      localStorage.setItem("user", response.data.User.name);
      localStorage.setItem("userid", response.data.User._id);
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/userdashboard");
      }, 2000);
    } catch (error) {
      toast.error("Invalid Credentials.");
    }
  };

const handleResetSubmit = async (e) => {
  e.preventDefault();
  let api = `${BackendUrl}/user/reset-password`;

  try {
    const response = await axios.post(api, resetInput); 
    setResetInput({
      name:"",
      oldPassword:"",
      newPassword:""
    })

    toast.success(response.data.msg);
    setShowReset(false);

    setTimeout(() => {
      setShow(true); 
    }, 500);
  } catch (error) {
    console.log("Reset password error:", error);

    toast.error(
      error?.response?.data?.msg || 
      error?.message || 
      "Failed to reset password"
    );
  }
};




  return (
    <>
    
      <Navbar className="fs-4 nav-brand-custom" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand className="fs-4 nav-brand-custom">
            TaskManager Pro
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
              <FaUserCircle size={30} className="me-2" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <StyledWrapper>
            
            <Form>
              <div className="login-card">
                <span className="login-title">User Login</span>
                <div className="login-inputBox">
                  <input
                    type="text"
                    required
                    name="name"
                    value={input.name}
                    onChange={handleInput}
                  />
                  <span>Username</span>
                </div>
                <div className="login-inputBox">
                  <input
                    type="password"
                    required
                    name="password"
                    value={input.password}
                    onChange={handleInput}
                  />
                  <span>Password</span>
                </div>
                <button
                  className="login-enter"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <a onClick={() => { setShow(false); setShowReset(true); }}>
                  Forgot Password?
                </a>
              </div>
            </Form>
          </StyledWrapper>
          
        </Modal.Body>
      </Modal>

     
      <Modal show={showReset} onHide={() => setShowReset(false)} centered>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
          <StyledWrapper>
            <Form onSubmit={handleResetSubmit}>
              <div className="login-card">
                <span className="login-title">Reset Password</span>

                <div className="login-inputBox">
                  <input
                    type="text"
                    name="name"
                    required
                    value={resetInput.name}
                    onChange={handleResetChange}
                  />
                  <span>Username</span>
                </div>

                <div className="login-inputBox">
                  <input
                    type="password"
                    name="oldPassword"
                    required
                    value={resetInput.oldPassword}
                    onChange={handleResetChange}
                  />
                  <span>Old Password</span>
                </div>

                <div className="login-inputBox">
                  <input
                    type="password"
                    name="newPassword"
                    required
                    value={resetInput.newPassword}
                    onChange={handleResetChange}
                  />
                  <span>New Password</span>
                </div>

                <button className="login-enter" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </StyledWrapper>
        
        </Modal.Body>
      </Modal>
      <ToastContainer position="top-center" />
    </>
  );
};

export default TopNav;
