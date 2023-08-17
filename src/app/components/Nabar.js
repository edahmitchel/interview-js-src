import Link from "next/link";

import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          naira<span>refill</span>
        </div>
        <div className="navbar_social_links">
          <Link href={"#"} className="social_links register">
            Register
          </Link>
          <Link href={"#"} className="social_links login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
