"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import slide1 from "../../../public/slider/Size=Default.png";
const SliderSection = () => {
  return (
    <section>
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="overflow-hidden w-full max-w-5xl">
          <motion.div
            className="flex gap-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 390, ease: "linear" }}
          >
            {/* দুইবার map করলাম যেন লুপের মতো দেখায় */}

            <Image src={slide1} alt="slider1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
