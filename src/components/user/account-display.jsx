import React from "react";
import { useMetaMask } from "metamask-react";
import ConnectWalletButton from "../connect-wallet/connect-wallet-button";
import { VotingContextProvider } from "../";
import { Row } from "react-bootstrap";

function ConnectedAccount({ account }) {
  return <ConnectedAccountDisplay account={account} />;
}

function NotConnectedAccount() {
  return (
    <div>
      <Row>
        *** Connect wallet to the Ropsten testnet to place your vote! ***
      </Row>
      <br />
      <Row>
        <ConnectWalletButton />
      </Row>
    </div>
  );
}

function ConnectedAccountDisplay() {
  return <VotingContextProvider />;
}

function AccountDisplay() {
  const metaMask = useMetaMask();

  return (
    <>
      {metaMask.status !== "connected" ? (
        <NotConnectedAccount />
      ) : (
        <ConnectedAccount />
      )}
    </>
  );
}

export default AccountDisplay;
