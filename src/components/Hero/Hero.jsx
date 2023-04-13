import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter innerWidth paddings hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
        <div className="hero-title">
        <div className="orange-circle"/>
          <h1>Discover <br /> Most Suitable <br />Property</h1>
        </div>
        <div className="flexColStart hero-description">
          <span>Fimd a varieties of property that suit you very easily.</span> <br />
          <span>Forget all difficulties to find a residence for you.</span>
        </div>
        <div className="flexCenter hero-search">
        <HiLocationMarker size={25} color="var(--blue)"/>
          <input type="text" name="search" id="search"/>
          <button className="button" >Search</button>
        </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
