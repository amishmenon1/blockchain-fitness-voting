import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { generateTestingUtils } from "eth-testing";
import { MetaMaskProvider } from "metamask-react";
import { AccountDisplay } from "components/user";

describe("AccountDisplay component", async () => {
  let connectWalletButtonElement;
  const mockedAccount = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
  const testingUtils = generateTestingUtils({ providerType: "MetaMask" });
  let originalEth;
  beforeAll(() => {
    originalEth = window.ethereum;
    const provider = testingUtils.getProvider();
    window.ethereum = provider;
  });
  afterAll(() => {
    window.ethereum = originalEth;
  });
  beforeEach(() => {});
  afterEach(() => {
    console.log("afterEach");
    testingUtils.clearAllMocks();
  });

  it("ConnectWallet button is displayed when wallet not connected", () => {
    testingUtils.mockNotConnectedWallet();
    testingUtils.mockRequestAccounts([mockedAccount]);
    render(
      <MetaMaskProvider>
        <AccountDisplay />
      </MetaMaskProvider>
    );
    connectWalletButtonElement = screen.queryByText("Connect Wallet");
    expect(connectWalletButtonElement).toBeInTheDocument();
  });

  it("ConnectWallet button is not displayed when wallet is connected", async () => {
    testingUtils.mockConnectedWallet([mockedAccount]);
    console.log("window.ethereum: ", window.ethereum);
    render(
      <MetaMaskProvider>
        <AccountDisplay />
      </MetaMaskProvider>
    );
    connectWalletButtonElement = screen.queryByText("Connect Wallet");
    await waitForElementToBeRemoved(connectWalletButtonElement);
    expect(connectWalletButtonElement).not.toBeInTheDocument();
  });
});
