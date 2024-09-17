import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default About;
