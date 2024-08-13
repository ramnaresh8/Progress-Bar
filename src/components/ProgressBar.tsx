import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #000",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${(progress / 150) * 100}%`,
            borderRadius: "10px",
            height: "100%",
            backgroundColor: "white",
          }}
        ></div>
      </div>
      <p>{`Progress: ${progress % 150}`}</p>
    </div>
  );
};

export default ProgressBar;
