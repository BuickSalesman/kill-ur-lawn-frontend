import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> | <Signup /> | <Login /> | <LogoutLink />
      </nav>
    </header>
  );
}
