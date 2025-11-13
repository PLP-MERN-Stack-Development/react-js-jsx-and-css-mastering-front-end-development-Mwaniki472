import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import useLocalStorage from "../hooks/useLocalStorage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [taskInput, setTaskInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filteredTasks =
    filter === FILTERS.ALL
      ? tasks
      : filter === FILTERS.ACTIVE
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Task Manager
      </h2>

      <form onSubmit={addTask} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
        />
        <Button type="submit" variant="primary" className="rounded-l-none">
          Add
        </Button>
      </form>

      <div className="flex justify-between mb-3">
        {Object.values(FILTERS).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {filteredTasks.length > 0 ? (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-2 rounded"
            >
              <span
                onClick={() => toggleComplete(task.id)}
                className={`cursor-pointer flex-1 ${
                  task.completed ? "line-through text-gray-500" : "text-gray-800 dark:text-gray-100"
                }`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks found.</p>
      )}
    </Card>
  );
};

export default TaskManager;
