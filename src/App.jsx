
import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

const schoolName = 'EAV Kivumu TSS';
const className = 'TVET Certificate IV - Software Development';

function SchoolHeader({ school }) {
  return (
    <header>
      <h1>{school}</h1>
      <p>Class Website</p>
    </header>
  );
}

function App() {
  const [page, setPage] = useState('Home');

  function showPage(selectedPage) {
    setPage(selectedPage);
  }

  return (
    <div>
      <SchoolHeader school={schoolName} />

      <nav>
        <button onClick={() => showPage('Home')}>Home</button>{' '}
        <button onClick={() => showPage('About')}>About</button>{' '}
        <button onClick={() => showPage('Students')}>Students</button>{' '}
        <button onClick={() => showPage('Contact')}>Contact</button>
      </nav>

      <hr />

      {page === 'Home' && (
        <Home school={schoolName} className={className} />
      )}

      {page === 'About' && (
        <About school={schoolName} />
      )}

      {page === 'Students' && (
        <Students className={className} />
      )}

      {page === 'Contact' && (
        <Contact
          school={schoolName}
          onHome={() => showPage('Home')}
        />
      )}

      <hr />
      <footer>
        <p>{schoolName} - Software Development Class</p>
      </footer>
    </div>
  );
}

export default App;
