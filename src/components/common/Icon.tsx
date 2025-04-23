import React from "react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const sizeStyle = {
    fontSize: `${size}px`,
  };

  return <i className={`${name} ${className}`} style={sizeStyle}></i>;
};

export default Icon;
