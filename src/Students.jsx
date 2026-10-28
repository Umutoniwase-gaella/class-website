
function Students({ className }) {
  const students = [
    { id: 1, name: 'Student One', trade: 'Software Development' },
    { id: 2, name: 'Student Two', trade: 'Software Development' },
    { id: 3, name: 'Student Three', trade: 'Software Development' },
    { id: 4, name: 'Student Four', trade: 'Software Development' },
    { id: 5, name: 'Student Five', trade: 'Software Development' }
  ];

  return (
    <main>
      <h2>Our Students</h2>
      <p>Class: {className}</p>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Trade: {student.trade}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Students;
