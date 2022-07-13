import React, { useContext } from "react";
import { VotingContext } from "../Context/VotingContextProvider";
import Status from "../../global/Status";
import { Row, Button, Spinner } from "react-bootstrap";
import ExerciseType from "../../global/ExerciseType";

const Scoreboard = () => {
  const [votingState] = useContext(VotingContext);
  const { numWeightliftingVotes, numCardioVotes } = votingState;

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
        return <div>*** Place Your Vote! ***</div>;
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
