import React, { useState, useContext } from "react";
import { Row } from "react-bootstrap";
import VotingCard from "./voting-card";
import bg from "images/bg-1.jpeg";
import VotingStatus from "global/voting-status";
import ExerciseType from "global/exercise-types";
import { useEffect } from "react";
import { useVotingContract } from "global/voting-contract";
import { VotingContext } from "components/context/voting-context-provider";

function VotingCards({ connected, loadVotes }) {
  return connected ? (
    <ConnectedVotingCards loadVotes={loadVotes} />
  ) : (
    <DisconnectedVotingCards />
  );
}

export function ConnectedVotingCards({ loadVotes }) {
  const [votingState, dispatch] = useContext(VotingContext);
  const votingContract = useVotingContract();
  const [voteDisabled, setVoteDisabled] = useState(false);
  const { WEIGHTLIFTING } = ExerciseType;

  async function vote(selection) {
    dispatch({
      type: VotingStatus.PENDING,
      votingState,
    });
    const chooseWeightlifting = selection.value === WEIGHTLIFTING.value;
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
  };
  return (
    <Row style={styles.cardDisplay}>
      <VotingCardsDisplay voteDisabled={voteDisabled} voteCallback={vote} />
    </Row>
  );
}

function VotingCardsDisplay({ voteDisabled, voteCallback }) {
  const { WEIGHTLIFTING, CARDIO } = ExerciseType;
  const [exerciseTypes] = useState([WEIGHTLIFTING, CARDIO]);
  const styles = {
    spacer: {
      width: "400px",
      display: "flex",
      justifyContent: "center",
    },
  };
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

export function DisconnectedVotingCards() {
  const styles = {
    cardDisplay: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <>
      <Row style={styles.cardDisplay}>
        <VotingCardsDisplay voteDisabled={true} />
      </Row>
    </>
  );
}

export default VotingCards;
