import React, { useState } from "react";

function StyledButton({
  onClick,
  disabled = false,
  hoverEnabled = false,
  style = {},
  children,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
  };

  const buttonStyles = {
    ...style,
    backgroundColor: isHovering ? "#000000" : style.backgroundColor,
    color: isHovering ? "#FFFFFF" : style.color,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={hoverEnabled ? handleMouseEnter : null}
      onMouseLeave={hoverEnabled ? handleMouseLeave : null}
      style={buttonStyles}
      disabled={disabled}
      className="btn btn-primary"
    >
      {children}
    </button>
  );
}

export default StyledButton;
