import Image from "next/image";
import SectionTitle from "./SectionTitle";
import luncher from "../../../public/logo/RocketLaunch.png";
import palette from "../../../public/logo/Palette.png";
import lightning from "../../../public/logo/Lightning.png";
import currency from "../../../public/logo/CurrencyDollar.png";
import arrows from "../../../public/logo/ArrowsClockwise.png";
import trophy from "../../../public/logo/Trophy.png";
const TrustUs = () => {
  return (
    <div className="bg-[#1FFFA5]/20 pt-20">
      <SectionTitle
        heading="Why businesses TrustUs With Their Designs"
        subHeading="We combine proven conversion frameworks with agency-level design to deliver results that matter."
      />
      <div className="trustUs-parent">
        {/* children 1 */}
        <div className="trustUs-children">
          <Image src={luncher} alt="rocker-luncher" />
          <h3>Proven Conversion Framework</h3>
          <p>
            Designs based on 100+ tested layouts that actually convert visitors
            into customers.
          </p>
        </div>
        {/* children 2 */}
        <div className="trustUs-children">
          <Image src={palette} alt="rocker-luncher" />
          <h3>Agency Level Design</h3>
          <p>
            Modern, premium, and tailored for your brand - without the agency
            price tag.
          </p>
        </div>
        {/* children 3 */}
        <div className="trustUs-children">
          <Image src={lightning} alt="rocker-luncher" />
          <h3>5-day Guaranteed Delivery</h3>
          <p>
            With a highly professional team, we deliver on time, every time.
          </p>
        </div>
        {/* children 4 */}
        <div className="trustUs-children">
          <Image src={currency} alt="rocker-luncher" />
          <h3>Transparent Pricing</h3>
          <p>No hidden fees, just clear value. What you see is what you pay.</p>
        </div>
        {/* children 5 */}
        <div className="trustUs-children">
          <Image src={arrows} alt="rocker-luncher" />
          <h3>Revisions Until You're Happy</h3>
          <p>
            We keep working until it's right. Your satisfaction is guaranteed.
          </p>
        </div>
        {/* children 6 */}
        <div className="trustUs-children">
          <Image src={trophy} alt="rocker-luncher" />
          <h3>Results That Speak</h3>
          <p>
            Our pages consistently outperform industry averages for conversions.
          </p>
        </div>
      </div>

      <h1>hello trust</h1>
    </div>
  );
};

export default TrustUs;
