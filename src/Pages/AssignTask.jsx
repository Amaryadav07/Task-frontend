import { useState, useEffect } from "react";
import BackendUrl from "../Config/backendUrl";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const [Userid, setUserid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (uid) => {
    setUserid(uid);
    setInput({}); 
    setShow(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${BackendUrl}/admin/assigntask`;
    try {
      const response = await axios.post(api, { ...input, Userid });
      console.log(response.data);
 toast.success("Task assigned successfully!");
        handleClose();
     
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong while assigning the task.");
    }
  };

  const loadData = async () => {
    const api = `${BackendUrl}/admin/showuserdata`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load user data.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      <h2 className="assign-heading">Assign Task to User</h2>
      <div className="table-wrapper">
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((key) => (
              <tr key={key._id}>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.designation}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => handleShow(key._id)}
                  >
                    Assign Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center fw-bold">
            Assign Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="assign-task-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="taskTitle">Task Title</label>
              <input
                type="text"
                className="form-control"
                id="taskTitle"
                placeholder="Enter Title"
                name="title"
                value={input.title || ""}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskDescription">Task Description</label>
              <input
                type="text"
                className="form-control"
                id="taskDescription"
                placeholder="Enter Description"
                name="description"
                value={input.description || ""}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskDeadline">Task Deadline</label>
              <input
                type="text"
                className="form-control"
                id="taskDeadline"
                placeholder="Enter Deadline Day"
                name="deadline"
                value={input.deadline || ""}
                onChange={handleInput}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AssignTask;
