import React from "react";
import StudentCard from "./StudentCard";

const sampleStudents = [
  { id: 1, name: "Alice", course: "Computer Science" },
  { id: 2, name: "Bob", course: "Information Technology" },
];

const Home = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Student List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  </section>
);

export default Home;
