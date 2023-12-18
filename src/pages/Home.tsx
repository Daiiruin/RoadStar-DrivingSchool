import { LuPartyPopper } from "react-icons/lu";
import { PiMedalFill } from "react-icons/pi";
import MonImage from "../images/background-drive.png";
import "./Home.css";
export const Home = () => {
  return (
    <div className="mainContainer">
      <div className="backgroundTop" />
      <div className="mainInfos">
        <div className="textInfos">
          <h1>RoadStar Driving School</h1>
          <p>
            Welcome to RoadStar Driving School, where expert guidance meets
            modern learning. Our certified instructors provide top-notch
            training, ensuring you become a confident, safe driver. Our courses,
            designed with the latest techniques, cater to all, from beginners to
            advanced. Join us for a journey to driving excellence. Your road to
            independence starts here!
          </p>
          <div className="logoContainer">
            <PiMedalFill size={24} />
            <p>Best driving school 2023</p>
            <LuPartyPopper size={24} />
            <p>91% success</p>
          </div>
        </div>
        <div className="mapContainer">
          <h2>Where we are !</h2>
          <div className="googleMap" />
        </div>
      </div>
      <div className="moreInfos">
        <div className="moreInfoCard">
          <img className="imageInfo" src={MonImage} alt="qq" />
          <div className="contentMoreInfo">
            <h3>OVERVIEW</h3>
            <p>
              RoadStar School: Top driving lessons. Expert instructors. Safe,
              confident driving skills
            </p>
          </div>
        </div>
        <div className="moreInfoCard">
          <img className="imageInfo" src={MonImage} alt="qq" />
          <div className="contentMoreInfo">
            <h3>LESSONS</h3>
            <p>
              Learn safe driving with RoadStar. Expert lessons for all levels.
              Start your journey
            </p>
          </div>
        </div>
        <div className="moreInfoCard">
          <img className="imageInfo" src={MonImage} alt="qq" />
          <div className="contentMoreInfo">
            <h3>PRICING</h3>
            <p>
              Affordable rates at RoadStar. Quality training, great value. Start
              driving today
            </p>
          </div>
        </div>
        <div className="moreInfoCard">
          <img className="imageInfo" src={MonImage} alt="qq" />
          <div className="contentMoreInfo">
            <h3>CONTACT US</h3>
            <p>
              Contact RoadStar! Friendly team ready to help. Call or email for
              info and bookings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
