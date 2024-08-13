import React from "react";

type IncrementProps = {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const IncrementProgress: React.FC<IncrementProps> = ({ setProgress }) => {
  const handleClick = () => {
    setProgress((prev) => Math.min(prev + 1, 150));
  };
  return (
    <button style={{ margin: "10px" }} onClick={handleClick}>
      Increment
    </button>
  );
};

export default IncrementProgress;
