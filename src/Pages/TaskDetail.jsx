import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../Config/backendUrl";
import Table from "react-bootstrap/Table";
import right from "../Images/right.png";
import wrong from "../Images/wrong.jpeg";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskDetail = () => {
  const [mydata, setMydata] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadData = async () => {
    let api = `${BackEndUrl}/admin/taskdetail`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeTaskStatus = async (id) => {
    let api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
    try {
      await axios.get(api);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  // Filter by name
  const filteredData = mydata.filter((item) =>
    item.userid.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let no = startIndex;


  const deletetask = async (id) => {

    const api = `${BackEndUrl}/admin/deletetask/?id=${id}`;
      try {
   const response= await axios.delete(api); 
   console.log(response.data)
    toast.success("Task deleted successfully!");
    loadData(); 
  } catch (error) {
    toast.error("Failed to delete task.");
    console.error(error);
  }
};


  return (
    <>
      <h2 className="mb-4">Task Details List</h2>

      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          type="text"
          placeholder="Search by employee name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to page 1 on new search
          }}
        />
      </Form.Group>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>#</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((key, index) => (
            <tr key={key._id}>
              <td>
                <img
                  src={key.taskstatus ? right : wrong}
                  width="30"
                  height="30"
                  alt="status"
                />
              </td>
              <td>{++no}</td>
              <td>{key.userid.name}</td>
              <td>{key.userid.email}</td>
              <td>{key.title}</td>
              <td>{key.description}</td>

              <td>
                <MdDeleteForever
                  onClick={() => deletetask(key._id)}
                  style={{ color: "red", cursor: "pointer",fontSize:"20px" }}
                  title="Delete Task"
                />
              </td>

              <td>
                {key.taskstatus ? (
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => changeTaskStatus(key._id)}
                  >
                    ReAssign
                  </Button>
                ) : (
                  <Button variant="danger" size="sm" disabled>
                    Pending...
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
      <Pagination>
        {[...Array(totalPages).keys()].map((pageNum) => (
          <Pagination.Item
            key={pageNum + 1}
            active={pageNum + 1 === currentPage}
            onClick={() => handlePageChange(pageNum + 1)}
          >
            {pageNum + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default TaskDetail;
