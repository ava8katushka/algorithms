import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navigation() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <div className="navbar-brand">
          <a className="navbar-item" href="/chapter/time_and_space/about">
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "house"]} />
              </span>
            </span>
          </a>
        </div>
        <a className="navbar-item">Ava coding</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/ava8katushka/algorithms">
          <span className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </span>
          </span>
        </a>
      </div>
    </nav>
  );
}
