import Image from "next/image";
import "./styles.css";
import logo from "../../../public/image/Logo.png";
const HeroSection = () => {
  return (
    <div className="bg-[#1FFFA5] parent">
      <div className="logo-parent">
        <Image className="logo" src={logo} alt="logo" />
      </div>
      <div className=" border-8">
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default HeroSection;
