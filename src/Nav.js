import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
      {/* Link = add what you want to act as a link
        to = specify the path the link will route to
       */}
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
