import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-12">
      <h3 className="heading">{heading}</h3>
      <p className="subHeading">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
