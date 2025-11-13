import React, { useState } from "react";
import Button from "./ui/Button";

const StudentForm = () => {
  const [form, setForm] = useState({ name: "", course: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Added student: ${form.name}`);
    setForm({ name: "", course: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow p-6 rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <div className="flex justify-end">
        <Button type="submit" variant="primary">Add</Button>
      </div>
    </form>
  );
};

export default StudentForm;
