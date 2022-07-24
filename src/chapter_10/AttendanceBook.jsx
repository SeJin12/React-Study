import React from "react";

const students = [
    {name: "Sejin", id:1},
    {name: "Inje",id:2},
    {name: "Jason",id:3},
    {name: "Steven",id:4}
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student)=> {
                return <li key={student.id}>{student.name} id = {student.id}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;