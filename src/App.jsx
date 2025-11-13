import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import StudentForm from "./components/StudentForm";
import TaskManager from "./components/TaskManager";
import ApiDataFetcher from "./components/ApiDataFetcher";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api-data" element={<ApiDataFetcher />} /> {/* ✅ NEW */}
      </Routes>
    </Layout>
  );
}

export default App;
