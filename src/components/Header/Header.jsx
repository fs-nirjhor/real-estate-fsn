import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" />
        <div className="flexCenter h-menu">
        {/* intentionally mistake href spelling for testing purpose */}
          <a hre="residencies">Residencies</a>
          <a hre="our-value">Our Value</a>
          <a hre="contact-us">Contact Us</a>
          <a hre="get-started">Get Started</a>
          <a hre="login">
            <button className="button">Login</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
