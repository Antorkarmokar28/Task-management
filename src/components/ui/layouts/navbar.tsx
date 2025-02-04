import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-3/4 mx-auto p-4">
      <div>
        <h3 className="text-violet-500 text-2xl font-semibold">NavBar</h3>
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <Link to="/">Tasks</Link>
          <Link to="/users">Users</Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
}
