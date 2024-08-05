import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Homepage from "./pages/Homepage";
import AdminLogin from "./pages/AdminLogin";
import ProjectTable from "./components/project/ProjectTable";
import DataEditor from "./components/dataEditor/DataEditor";
import Messages from "./components/messages/Messages";
import "./App.css";

function App() {
  useEffect(function () {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="admin-auth" element={<AdminLogin />}>
            <Route path="projects" element={<ProjectTable />} />
            <Route path="editor" element={<DataEditor />} />
            <Route path="messages" element={<Messages />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
