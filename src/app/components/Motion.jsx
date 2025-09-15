import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        style={{ gap: `${gap}px` }}
      >
        {/* 1st set */}
        <div className="flex" style={{ gap: `${gap}px` }}>
          {items.map((item, i) => (
            <Image key={`set1-${i}`} src={item} alt={`slide-${i}`} />
          ))}
        </div>

        {/* duplicate set */}
        <div className="flex" style={{ gap: `${gap}px` }}>
          {items.map((item, i) => (
            <Image key={`set2-${i}`} src={item} alt={`slide-${i}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Motion;
