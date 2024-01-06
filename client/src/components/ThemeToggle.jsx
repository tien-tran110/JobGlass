import { useDashboardContext } from "../pages/Dashboard";
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
const ThemeToggle = () => {
    const { isDarkTheme, toggleTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleTheme}>
        {isDarkTheme ? <BsSunFill className="toggle-icon"/> : <BsMoonStarsFill />}
    </Wrapper>
  )
}
export default ThemeToggle