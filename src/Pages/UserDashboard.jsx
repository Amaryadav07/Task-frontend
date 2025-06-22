import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackendUrl from "../Config/backendUrl";


const UserDashboard = () => {
  const navigate = useNavigate();

  const [totalTasks, setTotalTasks] = useState(0);
const [completedTasks, setCompletedTasks] = useState(0);
const [pendingTasks, setPendingTasks] = useState(0);


const fetchTaskStats = async () => {
  try {
    const id = localStorage.getItem("userid");
    const res = await axios.get(`${BackendUrl}/user/mytask/?id=${id}`);
    const allTasks = res.data;
    setTotalTasks(allTasks.length);
    setCompletedTasks(allTasks.filter(task => task.taskstatus).length);
    setPendingTasks(allTasks.filter(task => !task.taskstatus).length);
  } catch (error) {
    console.error("Error fetching user task stats", error);
  }
};

useEffect(() => {
  fetchTaskStats();
}, []);


  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="dashboard-container">
      <ToastContainer />

      <aside className="sidebar">
        <h3>User DashBoard</h3>
        <ul className="nav-list">
          <NavLink to="mytask" className="nav-link">
            <li className="nav-item active">My Task</li>
          </NavLink>

          <NavLink to="completed" className="nav-link">
            <li className="nav-item">Completed Task</li>
          </NavLink>

          <NavLink to="pending" className="nav-link">
            <li className="nav-item">Pending Task</li>
          </NavLink>
          <li className="nav-item" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <h2>
          Welcome{" "}
          <span style={{ color: "orangered" }}>
            {localStorage.getItem("user")}
          </span>
        </h2>
        <div className="user-stat-cards">
  <div className="stat-card user-card">
    <h4>Total Tasks</h4>
    <p>{totalTasks}</p>
  </div>
  <div className="stat-card user-card">
    <h4>Completed</h4>
    <p>{completedTasks}</p>
  </div>
  <div className="stat-card user-card">
    <h4>Pending</h4>
    <p>{pendingTasks}</p>
  </div>
</div>

        <Outlet/>
      </main>
    </div>
  );
};

export default UserDashboard;
