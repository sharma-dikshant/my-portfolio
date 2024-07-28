import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProjectTable from "./components/project/ProjectTable";
import DataEditor from "./components/dataEditor/DataEditor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="admin-auth" element={<AdminLogin />}>
            <Route path="projects" element={<ProjectTable />} />
            <Route path="editor" element={<DataEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
