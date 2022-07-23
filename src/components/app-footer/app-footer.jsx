import React from "react";
import { Disclaimer } from "components";

function AppFooter() {
  const disclaimerMessage = () => {
    const msg = `In order for this app to work successfully, you must have a Metamask wallet connected to the Ropsten testnet.`;
    return msg;
  };
  return (
    <footer className="App-footer" style={{ marginTop: "20px" }}>
      <Disclaimer message={disclaimerMessage()} />
    </footer>
  );
}

export default AppFooter;
