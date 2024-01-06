import { useDashboardContext } from "../pages/Dashboard";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ isBigSideBar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSideBar ? null : toggleSidebar}
            end
          >
            <span className="icon"> {icon} </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
