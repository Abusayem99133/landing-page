"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import slide1 from "../../../public/slider/Size=Default (3).png";
import slide2 from "../../../public/slider/Size=Default.png";

import slide3 from "../../../public/slider/Size=Default (1).png";
import slide4 from "../../../public/slider/Size=Default (2).png";
import slide5 from "../../../public/slider/Size=Default (3).png";

const SliderSection = () => {
  return (
    <section>
      <div className=" flex items-center justify-center ">
        <div className="overflow-hidden w-full ">
          <motion.div
            className="flex gap-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <div className="flex gap-6">
              <Image src={slide1} alt="slider1" />
              <Image src={slide2} alt="slider2" />
              <Image src={slide3} alt="slider3" />
              <Image src={slide4} alt="slider4" />
              <Image src={slide5} alt="slider5" />
            </div>

            {/* duplicate set */}
            {/* <div className="flex gap-6">
              <Image src={slide1} alt="slider1" />
              <Image src={slide2} alt="slider2" />
              <Image src={slide3} alt="slider3" />
              <Image src={slide4} alt="slider4" />
              <Image src={slide5} alt="slider5" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
