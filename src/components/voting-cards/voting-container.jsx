import React from "react";
import { Row, Button } from "react-bootstrap";
import { Scoreboard, VotingCards, VotingContextProvider } from "components";
import { useMetaMask } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { toast } from "react-toastify";


export function VotingContainer() {
  const { status } = useMetaMask();
  const Loader = ({ msg }) => (
    <Button variant="link" id="loader" className="text-center">
      {msg}
    </Button>
  );

  switch (status) {
    case WalletStatus.INITIALIZING: {
      return <Loader msg={"Checking Web3 connection..."} />;
    }
    case WalletStatus.UNAVAILABLE: {
      toast.warn("Wallet unavailable", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return;
    }
    case WalletStatus.CONNECTED: {
      return <VotingContextProvider />;
    }

    default: {
      return (
        <Row>
          <Row>
            <VotingCards />
          </Row>
          <Row>
            <Scoreboard />
          </Row>
        </Row>
      );
    }
  }
}
