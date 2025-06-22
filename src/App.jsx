import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDasboard";
import CreateUser from "./Pages/CreateUser";
import AssignTask from "./Pages/AssignTask";
import UserDashboard from "./Pages/UserDashboard";
import MyTask from "./Pages/MyTask";
import TaskDetail from "./Pages/TaskDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="admin" element={<AdminDashboard />}>
          <Route path="createuser" element={<CreateUser />}/>
            <Route path="assigntask" element={<AssignTask />} />
              <Route path="taskdetail" element={<TaskDetail/>} />
         
        </Route>
      </Routes>

       <Routes>
        <Route path="userdashboard" element={<UserDashboard />}>
         <Route path="mytask" element={<MyTask />}/>
         
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
