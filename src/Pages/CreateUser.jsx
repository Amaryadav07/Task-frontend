import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackEndUrl from '../Config/backendUrl';
import { useState } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");

   const handleSubmit = async (e) => {
  e.preventDefault();
  let api = `${BackEndUrl}/admin/usercreation`;
  
  try {
    const response = await axios.post(api, {
      name: name,
      email: email,
      designation: designation
    });

    console.log(response);
    toast.success("User created and email sent successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to create user or send email.");
  }
};


    return (
        <div className="create-user-container">
            <h2 className="create-user-title">Create New User</h2>
            <Form className="create-user-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formBasicName">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }} 
                        placeholder="Enter full name"
                        required
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email} 
                        onChange={(e) => { setEmail(e.target.value) }} 
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="formBasicDesignation">
                    <Form.Label>Select Designation</Form.Label>
                    <Form.Select 
                        aria-label="Default select example" 
                        value={designation} 
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    >
                        <option value="">--Select Designation--</option>
                        <option value="Programmer">Programmer</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="DataBase Developer">DataBase Developer</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Coder">Coder</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Create User
                </Button>
            </Form>
            <ToastContainer position="top-center" autoClose={3000}  />

        </div>
    )
}

export default CreateUser;