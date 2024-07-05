import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import Logo from "./Logo";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, icon } = link;
                return (
                  <NavLink
                    to={path}
                    key={text}
                    className="nav-link"
                    onClick={toggleSidebar}
                    end
                  >
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
