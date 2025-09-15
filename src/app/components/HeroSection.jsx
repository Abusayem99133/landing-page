import Image from "next/image";
import "./styles.css";
import logo from "../../../public/image/Logo.png";
import trustedLogo from "../../../public/logo/Sparkle.png";
import email from "../../../public/logo/EnvelopeSimpleOpen.png";
import phone from "../../../public/logo/Phone.png";
import user from "../../../public/logo/User.png";
import lockIcon from "../../../public/logo/Vector.png";
import moneyIcon from "../../../public/logo/Vector (1).png";
import starIcon from "../../../public/logo/Vector (2).png";
const HeroSection = () => {
  return (
    <div className="bg-[#1FFFA5]/20  parent ">
      <div className="logo-parent">
        <Image className="logo" src={logo} alt="logo" />
      </div>
      <div className="trusted-parent">
        <div className="trusted-children">
          <Image
            className="trusted-logo"
            src={trustedLogo}
            alt="trusted logo"
          />
          <h3>Trusted by 30+ startups & entrepreneurs worldwide</h3>
        </div>

        <h1>Strategic LandingPages That</h1>
        <h1>Convert Form Just $200</h1>
        <p>
          Stop wasting traffic on generic pages. We deliver premium,
          conversion-focused landing pages designed, developed,
        </p>
        <p>and launched in just 5 days.</p>

        <div className="form-container">
          <form>
            <div className="input-group">
              <Image
                src={user}
                alt="phone"
                className="absolute mt-4 ml-3 w-[16px] h-[16px]"
              />
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group">
              <Image
                src={email}
                alt="email"
                className="absolute mt-4 ml-3 w-[16px] h-[16px]"
              />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group">
              <Image
                src={phone}
                alt="phone"
                className="absolute mt-4 ml-3 w-[16px] h-[16px]"
              />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <button type="submit" className="submit-btn">
              Get my high-converting landing page →
            </button>
          </form>
        </div>
        <div className="feature-parent">
          <div className="features">
            <div className="feature-item">
              <Image src={lockIcon} alt="lock Icon" />
              <span>SSL secure</span>
            </div>

            <div className="feature-item">
              <Image src={moneyIcon} alt="money Icon" />
              <span>Money-back guaranteed</span>
            </div>

            <div className="feature-item">
              <Image src={starIcon} alt="star Icon" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
