import { useMetaMask } from "metamask-react";
import React from "react";

function AppHeader() {
  const { account } = useMetaMask();
  const styles = {
    connected: {
      fontStyle: "italic",
    },
  };
  return (
    <>
      <header className="App-header">
        {account && (
          <div style={styles.connected}>
            {" "}
            Wallet Connected: {account.slice(0, 3)}...
            {account.slice(-3)}
          </div>
        )}
        <h1 className="App-title">Blockchain Fitness Voting App</h1>
      </header>
    </>
  );
}

export default AppHeader;
