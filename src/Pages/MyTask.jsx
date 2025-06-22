import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import BackendUrl from "../Config/backendUrl";
import { Button, Pagination } from "react-bootstrap";

const MyTask = () => {
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadData = async () => {
    let api = `${BackendUrl}/user/mytask/?id=${localStorage.getItem("userid")}`;
    try {
      const response = await axios.get(api);
      setMyData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitTask = async (id) => {
    let api = `${BackendUrl}/user/completetask/?id=${id}`;
    try {
      await axios.get(api);
    } catch (error) {
      console.log(error);
    }
    loadData(); // Refresh tasks
  };

  // Pagination calculations
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTasks = myData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(myData.length / itemsPerPage);

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h1 className="my" style={{ color: "black" }}>Task Details</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.deadline}</td>
              <td>
                {task.taskstatus ? (
                  <Button style={{ backgroundColor: "green" }} disabled>
                    Task Submitted
                  </Button>
                ) : (
                  <Button onClick={() => submitTask(task._id)}>Submit Task</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">{paginationItems}</Pagination>
    </>
  );
};

export default MyTask;
