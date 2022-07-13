import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  Disclaimer,
  ConnectWalletButton,
  VotingContextProvider,
} from "./components";
import {
  connectWallet,
  getEthereumProvider,
  walletIsConnected,
} from "./utils/ethereumUtils";

require("dotenv").config();

const App = () => {
  console.log("App component -- render");
  const [web3State, setWeb3State] = useState({
    ethereum: null,
    account: null,
    provider: null,
    connected: false,
    balance: 0,
  });

  useEffect(() => {
    console.log("App --- useEffect() -- render");
    const { ethereum } = window;
    const provider = getEthereumProvider(ethereum);
    async function loadWeb3State() {
      return walletIsConnected();
    }
    loadWeb3State().then((response) => {
      const { connected, accounts } = response;
      // setBlockInputsDisabled(!connected);
      if (!connected || !accounts) {
        return;
      }
      const account = connected ? accounts[0] : null;
      provider.getBalance(account).then((balance) => {
        setWeb3State({
          ethereum,
          provider,
          account,
          connected,
          balance,
        });
      });
    });
  }, []);

  async function handleConnectWallet() {
    const [ethereum, provider, account, balance] = await connectWallet();
    setWeb3State({ ethereum, provider, account, connected: true, balance });
  }

  const disclaimerMessage = () => {
    const msg = `In order for this app to work successfully, you must have a Metamask or Web3 provider
          account setup.`;
    return msg;
  };

  const styles = {
    connectButton: {
      display: "flex",
      justifyContent: "right",
    },
  };

  return (
    <>
      {web3State && (
        <div className="App">
          <header className="App-header">
            <Row style={styles.connectButton}>
              <ConnectWalletButton
                web3State={web3State}
                connectWalletCb={handleConnectWallet}
              />
            </Row>
            <h1 className="App-title">Blockchain Fitness Voting App</h1>
            {/* <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Voting App</h1> */}
          </header>
          <ToastContainer />
          <Row>
            <VotingContextProvider web3State={web3State} />
          </Row>

          <footer className="App-footer" style={{ marginTop: "20px" }}>
            <Disclaimer message={disclaimerMessage()} />
          </footer>
        </div>
      )}
    </>
  );
};

export default App;
