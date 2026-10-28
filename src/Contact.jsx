
function Contact({ school, onHome }) {
  return (
    <main>
      <h2>Contact Us</h2>

      <p>School: {school}</p>
      <p>Location: Kivumu, Rwanda</p>
      <p>
        Contact Email: Replace with your school's official email
      </p>

      <button onClick={onHome}>Return to Home</button>
    </main>
  );
}

export default Contact;
