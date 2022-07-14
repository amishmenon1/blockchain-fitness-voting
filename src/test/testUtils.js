import { render, screen, fireEvent } from "@testing-library/react";


const getVoteButton = () =>
  screen.getByRole("button", { name: "Vote!" });



const simulateVote = (element, inputValue) => {
  fireEvent.change(element, { target: { value: inputValue } });
};
export {
  getVoteButton,
  simulateVote,
};
