import { FaUser } from "react-icons/fa";
import "./Header.css";
export const Header = () => {
  return (
    <header className="headerContainer">
      <h2>ROAD STAR</h2>
      <div className="rightHeader">
        <nav>
          <a href="/link1" className="link">
            OVERVIEW
          </a>
          <a href="/link2" className="link">
            LESSONS
          </a>
          <a href="/link3" className="link">
            PRICING
          </a>
        </nav>
        <button className="primaryButton">CONTACT US</button>
        <button className="secondaryButton">
          <p>LOGIN</p>
          <FaUser size={12} />
        </button>
      </div>
    </header>
  );
};
