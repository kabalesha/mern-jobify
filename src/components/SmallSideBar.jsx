import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import Logo from "./Logo";

const SmallSidebar = () => {
  const data = useDashboardContext();
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, icon } = link;
                return (
                  <NavLink to={path} key={text} className="nav-link">
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
