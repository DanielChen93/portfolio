import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/fadengchen/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/portfolio/linkedin_icon.png" alt="" />
          </a>
          <a
            href="https://github.com/DanielChen93"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/portfolio/github_icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
