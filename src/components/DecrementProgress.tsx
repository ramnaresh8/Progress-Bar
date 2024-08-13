import React from "react";

type DecrementProps = {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const DecrementProgress: React.FC<DecrementProps> = ({ setProgress }) => {
  const handleClick = () => {
    setProgress((prev) => Math.max(prev - 1, 0));
  };
  return <button onClick={handleClick}>Decrement</button>;
};

export default DecrementProgress;
