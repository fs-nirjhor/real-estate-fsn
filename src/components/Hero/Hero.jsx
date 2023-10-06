import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

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
          <span className="secondaryText">Find a varieties of property that suit you very easily.</span>
          <span className="secondaryText">Forget all difficulties to find a residence for you.</span>
        </div>
        <div className="flexCenter hero-search">
        <HiLocationMarker size={25} color="var(--blue)"/>
          <input type="text" name="search" id="search"/>
          <button className="button" >Search</button>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
          <span>
            <CountUp start={8800} end={9000} duration={4}/>
            <span>+</span>
          </span>
            <span className="secondaryText">Premium Products</span>
          </div>
          <div className="flexColCenter stat">
          <span>
            <CountUp start={1950} end={2000} duration={4}/>
            <span>+</span>
          </span>
            <span className="secondaryText">Happy Customers</span>
          </div>
          <div className="flexColCenter stat">
          <span>
            <CountUp end={28} duration={4}/>
            <span>+</span>
          </span>
            <span className="secondaryText">Award Winning</span>
          </div>
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
