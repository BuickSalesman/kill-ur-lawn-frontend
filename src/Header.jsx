import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/signup">Sign up</Link> | <Link to="/login">Log in</Link> |{" "}
        <Link to="/lougoutlink">Log out</Link>
      </nav>
    </header>
  );
}
