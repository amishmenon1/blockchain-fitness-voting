import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import VotingCard from "./VotingCard";
import bg from "../../images/bg-1.jpeg";
import Status from "../../global/Status";
import ExerciseType from "../../global/ExerciseType";
import { useEffect } from "react";

//TODO: create VotesTable component
const VotingCards = ({ votingState, web3State, voteCallback }) => {
  const { WEIGHTLIFTING, CARDIO } = ExerciseType;
  const [exerciseTypes] = useState([WEIGHTLIFTING, CARDIO]);
  const [voteDisabled, setVoteDisabled] = useState(false);

  function refreshGif() {}
  useEffect(() => {
    if (!web3State || !votingState) {
      return;
    }
    const disabled = votingState.status !== Status.VOTES_LOADED;
    setVoteDisabled(disabled);
  }, [web3State.connected, votingState.status]);

  const styles = {
    cardDisplay: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      width: "18rem",
    },
    spacer: {
      width: "400px",
      display: "flex",
      justifyContent: "center",
    },
  };

  function VotingCardsUI() {
    return exerciseTypes.map((variant) => (
      <div key={variant.value} style={styles.spacer} img={bg}>
        <VotingCard
          variant={variant}
          voteDisabled={voteDisabled}
          voteCallback={voteCallback}
        />
      </div>
    ));
  }

  function DisplayIfExists() {
    const loader = (msg) => (
      <Button variant="link" id="loader" className="text-center">
        {msg}
      </Button>
    );

    switch (votingState.status) {
      case Status.IDLE:
        const idleDisplay = web3State.connected ? (
          <div></div>
        ) : (
          <div>
            *** Connect wallet to the Ropsten testnet to place your vote! ***
          </div>
        );
        return idleDisplay;
      case Status.PENDING:
        return VotingCardsUI();
      case Status.VOTES_LOADING:
        return VotingCardsUI();
      case Status.REJECTED:
        throw new Error("Something went wrong. Please check connection.");
      case Status.VOTE_ACTION_RESOLVED:
        return loader("Refreshing vote results...");
      case Status.VOTES_LOADED:
        return VotingCardsUI();
      default:
        console.log("default case - unexpected");
    }
  }

  return (
    <>
      <Row style={styles.cardDisplay}>{DisplayIfExists()}</Row>
    </>
  );
};

export default VotingCards;
