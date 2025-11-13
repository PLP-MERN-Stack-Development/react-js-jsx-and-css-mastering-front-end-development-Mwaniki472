import React from "react";
import Card from "./ui/Card";

const StudentCard = ({ student }) => (
  <Card className="hover:shadow-lg transition">
    <h3 className="text-lg font-bold">{student.name}</h3>
    <p className="text-gray-600">{student.course}</p>
  </Card>
);

export default StudentCard;
