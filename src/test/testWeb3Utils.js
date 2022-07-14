import { generateTestingUtils } from "eth-testing";

const MOCKED_ACCOUNT = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";

function mockWeb3State(mockConnected, mockAccount, mockBalance) {
  return { connected: mockConnected, account: mockAccount, mockBalance };
}

function mockContractCall(methodName, returnedValue) {
  contractTestingUtils.mockCall("value", ["100"]);
}

function getContractTestingUtils(testingUtils, abi) {
  return testingUtils.generateContractUtils(abi);
}

function getTestingUtils() {
  return generateTestingUtils({ providerType: "MetaMask" });
}

function getMockedAccount() {
  return MOCKED_ACCOUNT;
}

export { mockWeb3State, getTestingUtils, getContractTestingUtils,  getMockedAccount};
