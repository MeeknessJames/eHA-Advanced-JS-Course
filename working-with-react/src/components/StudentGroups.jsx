const StudentGroups = () => {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" }
  ];

  const groupedStudents = students.reduce((groups, student) => {
    const grade = student.grade;
    if (!groups[grade]) {
      groups[grade] = [];
    }

    groups[grade].push(student);
    return groups;
  }, {}); 

  return (
    <div>
      {}
      {Object.entries(groupedStudents).map(([grade, studentsInGrade]) => (
        <div key={grade}>
          <h3>Grade {grade}</h3>
          <ul>
            {studentsInGrade.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentGroups;