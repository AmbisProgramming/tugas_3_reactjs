import React from "react";

const TopEvents = () => {
  const handleFooter = (value, e) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <a href="/" onClick={(e) => handleFooter("Back To Home", e)}>
      Back to Home
    </a>
  );
};

export default TopEvents;
