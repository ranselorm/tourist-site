import { react } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Sites</h1>
        </Link>
        <nav>
          <div>
            <Link to="/create-site">Create Site</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
