import React, { useContext } from "react";
import { VotingContext } from "../Context/VotingContextProvider";
import Status from "../../global/Status";
import { Row, Button, Spinner } from "react-bootstrap";
import ExerciseType from "../../global/ExerciseType";

// Scoreboard component displays the current voting state.
const Scoreboard = () => {
  const [votingState] = useContext(VotingContext);
  const { numWeightliftingVotes, numCardioVotes } = votingState;

  // determineLeader function determines the current leader based on the number of votes.
  function determineLeader() {
    console.log("determining winner");
    const { WEIGHTLIFTING, CARDIO } = ExerciseType;
    let result;
    if (numWeightliftingVotes > numCardioVotes) {
      result = WEIGHTLIFTING;
    } else if (numWeightliftingVotes < numCardioVotes) {
      result = CARDIO;
    } else {
      result = { text: "Tied", value: "TIED" };
    }
    return result.text;
  }

  // ScoreboardUI function returns the UI for the scoreboard.
  function ScoreboardUI(result) {
    return (
      <div>
        {/* <Row> */}
        <h2>Leader: {result}!</h2>
        {/* </Row> */}
        <p>Weightlifting Votes: {numWeightliftingVotes.toString()}</p>
        <p>Cardio Votes: {numCardioVotes.toString()}</p>
      </div>
    );
  }

  const styles = {
    loader: {
      color: "#FFFFFF",
    },
  };

  // DisplayIfExists function returns the UI based on the current voting state.
  function DisplayIfExists() {
    const loader = (msg) => (
      <Button
        style={styles.loader}
        variant="link"
        id="loader"
        className="text-center"
      >
        {msg}
      </Button>
    );

    switch (votingState.status) {
      case Status.IDLE:
        return <></>;
      case Status.PENDING:
        return loader("Updating votes...");
      case Status.VOTES_LOADING:
        return loader("Loading votes...");
      case Status.REJECTED:
        throw new Error("Something went wrong. Please check connection.");
      case Status.VOTE_ACTION_RESOLVED:
        return loader("Refreshing vote results...");
      case Status.VOTES_LOADED:
        return ScoreboardUI(determineLeader());
      default:
        console.log("default case - unexpected");
    }
  }

  return <DisplayIfExists />;
};

export default Scoreboard;