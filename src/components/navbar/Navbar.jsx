import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="#">
            <img src="/linkedin_icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/github_icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
