import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <h2>My Header</h2>
      <nav>
        <a href="/"> Classic Home </a> | 
        <Link to="/"> Home</Link> | 
        <Link to="/about"> About</Link>
      </nav>
    </header>
  );
}

export default Header;