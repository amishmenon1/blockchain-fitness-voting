import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useMetaMask } from "metamask-react";
import { StyledButton } from "components";

function ConnectWalletButton() {
  const [open, setOpen] = React.useState(false);
  const { connect, status } = useMetaMask();

  const styles = {
    connectButton: {
      backgroundColor: "#D6DBDF",
      color: "#000000",
    },
    dialogButton: {
      backgroundColor: "#1976D2",
      color: "#FFFFFF",
    },
  };

  return (
    <>
      <StyledButton
        variant="contained"
        onClick={() => setOpen(true)}
        style={styles.connectButton}
      >
        Connect Wallet
      </StyledButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Connect wallet</DialogTitle>
        <DialogContent>
          <StyledButton
            onClick={connect}
            disabled={status === "connecting"}
            style={styles.dialogButton}
          >
            {status === "connecting" ? "Connecting" : "MetaMask"}
          </StyledButton>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ConnectWalletButton;
