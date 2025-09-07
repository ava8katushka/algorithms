import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LoginButton from "./LoginButton"

const Navbar = () => (
  <>
    {/* Spacer to prevent content from being covered */}
    <div style={{ height: "64px" }}></div>

    <nav className="navbar is-dark is-fixed-top" style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", zIndex: 1000 }}>
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item has-text-weight-bold is-size-4">
            🚀 Ava-coding
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link href="/aboutme" className="navbar-item" style={{ minWidth: "0px" }}>
              About Me
            </Link>
            <a className="navbar-item" href="https://github.com/ava8katushka/algorithms" target="_blank" rel="noopener noreferrer">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
              </span>
            </a>
            <LoginButton/>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;

