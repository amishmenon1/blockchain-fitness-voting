import React, { useState, useContext } from "react";
import { Row } from "react-bootstrap";
import VotingCard from "./voting-card";
import bg from "images/bg-1.jpeg";
import VotingStatus from "global/voting-status";
import ExerciseType from "global/exercise-types";
import { useEffect } from "react";
import { useVotingContract } from "global/voting-contract";
import { VotingContext } from "components/context/voting-context-provider";

function VotingCards({ loadVotes }) {
  const { WEIGHTLIFTING, CARDIO } = ExerciseType;
  const [exerciseTypes] = useState([WEIGHTLIFTING, CARDIO]);
  const [votingState, dispatch] = useContext(VotingContext);
  const votingContract = useVotingContract();
  const [voteDisabled, setVoteDisabled] = useState(false);

  async function vote(selection) {
    dispatch({
      type: VotingStatus.PENDING,
      votingState,
    });
    const chooseWeightlifting = selection === WEIGHTLIFTING.value;
    const voteFunction = chooseWeightlifting
      ? votingContract.voteWeightlifting
      : votingContract.voteCardio;

    const tx = await voteFunction();
    tx.wait()
      .then((res) => {
        dispatch({
          type: VotingStatus.VOTE_ACTION_RESOLVED,
          votingState,
        });
      })
      .then(() => {
        loadVotes();
      });
  }

  useEffect(() => {
    if (!votingState) {
      return;
    }
    setVoteDisabled(votingState.status !== VotingStatus.VOTES_LOADED);
  }, [votingState.status]);

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
          voteCallback={() => vote(variant.value)}
        />
      </div>
    ));
  }

  function DisplayIfExists() {
    switch (votingState.status) {
      case VotingStatus.IDLE:
        return <div></div>;
      case VotingStatus.PENDING:
        console.log("voting status: pending");
        return VotingCardsUI();
      case VotingStatus.VOTES_LOADING:
        return VotingCardsUI();
      case VotingStatus.VOTE_ACTION_RESOLVED:
        return VotingCardsUI();
      case VotingStatus.VOTES_LOADED:
        console.log("voting status: votes loaded");
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
}

export default VotingCards;
