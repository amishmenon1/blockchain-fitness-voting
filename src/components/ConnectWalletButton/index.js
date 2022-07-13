import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ConnectWalletButton = ({ web3State, connectWalletCb }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
  };

  const styles = {
    connected: {
      fontStyle: "italic",
    },
    button: {
      backgroundColor: isHovering ? "#000000" : "#D6DBDF",
      color: isHovering ? "#FFFFFF" : "#000000",
    },
  };

  return !web3State.connected ? (
    <>
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles.button}
        onClick={connectWalletCb}
        variant="primary"
      >
        Connect Wallet
      </Button>
    </>
  ) : (
    <div style={styles.connected}>
      {" "}
      Wallet Connected: {web3State.account.slice(0, 3)}...
      {web3State.account.slice(-3)}
    </div>
  );
};

export default ConnectWalletButton;
