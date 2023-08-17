import Link from "next/link";

import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="navbar_social_links">
          <Link href={"#"} className="social_links">
            Register
          </Link>
          <Link href={"#"} className="social_links">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
