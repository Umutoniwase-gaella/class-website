
import { useState } from 'react';

function Home({ school, className }) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h2>Welcome to Our Class Website</h2>
      <p>Welcome to {school}!</p>
      <h3>{className}</h3>

      <p>
        This website introduces our class, our students,
        the subjects we study, and our school.
      </p>

      <h3>Our Class</h3>
      <p>
        We are Software Development students learning to
        design, develop, test, and maintain software applications.
      </p>

      <h3>Interactive Counter</h3>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </main>
  );
}

export default Home;
