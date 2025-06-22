import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet } from "react-router-dom";
import BackendUrl from "../Config/backendUrl";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [userCount, setUserCount] = useState(0);
  const [taskAssignedCount, setTaskAssignedCount] = useState(0);
  const [taskListCount, setTaskListCount] = useState(0);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  // Fetch counts
  const fetchCounts = async () => {
    try {
      const userRes = await axios.get(`${BackendUrl}/admin/showuserdata`);
      const taskDetailRes = await axios.get(`${BackendUrl}/admin/taskdetail`);

      setUserCount(userRes.data.length);
      setTaskListCount(taskDetailRes.data.length);
      const assignedTasks = taskDetailRes.data.filter(t => !t.taskstatus);
      setTaskAssignedCount(assignedTasks.length);
    } catch (error) {
      console.error("Failed to load dashboard stats", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <ul className="menu">
          <Link to="" className="user">
            <li>Dashboard</li>
          </Link>
          <Link to="createuser" className="user">
            <li>Create User</li>
          </Link>
          <Link to="assigntask" className="user">
            <li>Tasks</li>
          </Link>
          <Link to="taskDetail" className="user">
            <li>Tasks List</li>
          </Link>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>
            Welcome To Admin Dashboard{" "}
            <span style={{ color: "white" }}>
              {localStorage.getItem("adminuser")}
            </span>
          </h1>
        </header>

     
        <div className="stat-cards">
          <div className="card stat-card">
            <h4>Total Users</h4>
            <p>{userCount}</p>
          </div>
          <div className="card stat-card">
            <h4>Tasks Assigned</h4>
            <p>{taskAssignedCount}</p>
          </div>
          <div className="card stat-card">
            <h4>Total Tasks</h4>
            <p>{taskListCount}</p>
          </div>
        </div>

        <br />
        <Outlet />
        <ToastContainer />
      </main>
    </div>
  );
};

export default AdminDashboard;
