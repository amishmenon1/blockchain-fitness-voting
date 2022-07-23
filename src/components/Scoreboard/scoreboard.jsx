import React, { useContext } from "react";
import { VotingContext } from "components/context/voting-context-provider";
import VotingStatus from "global/voting-status";
import { Button } from "react-bootstrap";
import ExerciseType from "global/exercise-types";

function Scoreboard() {
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
    return result;
  }

  const styles = {
    loader: {
      color: "#FFFFFF",
    },
    scoreboard: {
      backgroundColor: "#000000",
      opacity: "80%",
      color: "#FFFFFF",
      width: "400px",
      display: "inline-block",
      borderRadius: "20px",
    },
  };

  function ScoreboardUI(result) {
    return (
      <div style={styles.scoreboard}>
        <h2>
          {result.value === "TIED" ? result.text : `Leader: ${result.text}`}!
        </h2>
        <p>Weightlifting Votes: {numWeightliftingVotes.toString()}</p>
        <p>Cardio Votes: {numCardioVotes.toString()}</p>
      </div>
    );
  }

  function DisplayIfExists() {
    const loader = (msg) => (
      <div style={styles.scoreboard}>
        <Button
          style={styles.loader}
          variant="link"
          id="loader"
          className="text-center"
        >
          {msg}
        </Button>
      </div>
    );

    switch (votingState.status) {
      case VotingStatus.IDLE:
        return <></>;
      case VotingStatus.PENDING:
        return loader("Updating votes...");
      case VotingStatus.VOTES_LOADING:
        return loader("Loading votes...");
      case VotingStatus.VOTE_ACTION_RESOLVED:
        return loader("Refreshing vote results...");
      case VotingStatus.VOTES_LOADED:
        return ScoreboardUI(determineLeader());
      default:
        console.log("default case - unexpected");
    }
  }

  return <DisplayIfExists />;
}

export default Scoreboard;
