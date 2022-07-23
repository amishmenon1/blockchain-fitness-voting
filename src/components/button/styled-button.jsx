import React, { useState } from "react";
import { Button } from "@mui/material";

function StyledButton({ onClick, disabled = false, style, children }) {
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
    <Button
      variant="contained"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyles}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
