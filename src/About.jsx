
function About({ school }) {
  return (
    <main>
      <h2>About Our Class</h2>

      <p>
        This class website presents information about students,
        our school, and the Software Development trade.
      </p>

      <h3>About Our School</h3>
      <p>{school} is our school.</p>

      <h3>Software Development Trade</h3>
      <p>
        Software Development teaches students how to plan,
        design, program, test, and maintain software systems.
      </p>

      <h3>Subjects and Skills</h3>
      <ul>
        <li>Front-End Application Development with ReactJS</li>
        <li>Database Design and Management</li>
        <li>Back-End Application Development</li>
        <li>Programming and Software Testing</li>
      </ul>
    </main>
  );
}

export default About;
