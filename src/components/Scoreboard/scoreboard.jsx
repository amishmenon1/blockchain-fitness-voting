import React, { useContext } from "react";
import { VotingContext } from "components/context/voting-context-provider";
import VotingStatus from "global/voting-status";
import { Button } from "react-bootstrap";
import ExerciseType from "global/exercise-types";

function ScoreboardDisplay({
  result = {},
  numWeightliftingVotes = "0",
  numCardioVotes = "0",
}) {
  const styles = {
    scoreboard: {
      backgroundColor: "#000000",
      opacity: "80%",
      color: "#FFFFFF",
      width: "400px",
      display: "inline-block",
      borderRadius: "20px",
    },
  };
  function Leader({ result }) {
    const styles = {
      connectMessage: {
        fontStyle: "italic",
        fontFamily: "cursive",
      },
    };
    return result.text ? (
      <h2>
        {result.value === "TIED" ? result.text : `Leader: ${result.text}`}!
      </h2>
    ) : (
      <h2 style={styles.connectMessage}>Connect Wallet to Vote!</h2>
    );
  }
  return (
    <div style={styles.scoreboard}>
      <Leader result={result} />
      <p>Weightlifting Votes: {numWeightliftingVotes.toString()}</p>
      <p>Cardio Votes: {numCardioVotes.toString()}</p>
    </div>
  );
}
function DisconnectedScoreboard() {
  return (
    <ScoreboardDisplay
      result={{ text: "", value: "" }}
      numWeightliftingVotes={"0"}
      numCardioVotes={"0"}
    />
  );
}

function ConnectedScoreboard() {
  const [votingState] = useContext(VotingContext);
  const { numWeightliftingVotes, numCardioVotes } = votingState;

  function determineLeader() {
    console.log("determining winner");
    const { WEIGHTLIFTING, CARDIO } = ExerciseType;
    let result;
    if (numWeightliftingVotes.toNumber() > numCardioVotes.toNumber()) {
      result = WEIGHTLIFTING;
    } else if (numWeightliftingVotes < numCardioVotes) {
      result = CARDIO;
    } else {
      result = { text: "Tied", value: "TIED" };
    }
    return result;
  }

  function DisplayIfExists() {
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
    const Loader = ({ msg }) => (
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
        return <Loader msg={"Updating votes..."} />;
      case VotingStatus.VOTES_LOADING:
        return <Loader msg={"Loading votes..."} />;
      case VotingStatus.VOTE_ACTION_RESOLVED:
        return <Loader msg={"Refreshing vote results..."} />;
      case VotingStatus.VOTES_LOADED:
        const leader = determineLeader();
        return (
          <ScoreboardDisplay
            result={leader}
            numWeightliftingVotes={numWeightliftingVotes}
            numCardioVotes={numCardioVotes}
          />
        );
      default:
        console.log("default case - unexpected");
    }
  }

  return (
    <DisplayIfExists
      numWeightliftingVotes={numWeightliftingVotes}
      numCardioVotes={numCardioVotes}
    />
  );
}

function Scoreboard({ connected = false, loadVotes }) {
  return connected ? (
    <ConnectedScoreboard loadVotes={loadVotes} />
  ) : (
    <DisconnectedScoreboard />
  );
}

export default Scoreboard;
