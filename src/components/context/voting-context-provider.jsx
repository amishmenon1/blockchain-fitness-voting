import React, { useReducer, useEffect } from "react";
import { Row } from "react-bootstrap";
import VotingStatus from "global/voting-status";
import { Scoreboard, VotingCards } from "components";
import { votingStatusReducer } from "global/reducer/voting-status-reducer";
import { useMetaMask } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useReadonlyVotingContract } from "global/voting-contract";

export const VotingContext = React.createContext();

export function VotingContextProvider() {
  const [votingState, dispatch] = useReducer(votingStatusReducer, {
    numWeightliftingVotes: 0,
    numCardioVotes: 0,
    status: VotingStatus.IDLE,
    error: null,
  });
  const votingContract = useReadonlyVotingContract();
  const { status } = useMetaMask();

  useEffect(() => {
    if (!votingContract) {
      dispatch({
        type: VotingStatus.REJECTED,
        error: "Contracts not deployed to current chain.",
      });
      return;
    }
    async function votesInitialLoad() {
      await loadVotes();
    }
    votesInitialLoad();
  }, [votingContract]);

  async function loadVotes() {
    dispatch({
      type: VotingStatus.VOTES_LOADING,
    });
    const numWeightliftingVotes =
      await votingContract.functions.weightliftingVotes();
    const numCardioVotes = await votingContract.functions.cardioVotes();
    if (!numWeightliftingVotes[0] || !numCardioVotes[0]) {
      console.error("Could not fetch vote counts");
    }
    const votingState = {
      numWeightliftingVotes: numWeightliftingVotes[0],
      numCardioVotes: numCardioVotes[0],
    };

    dispatch({
      votingState,
      type: VotingStatus.VOTES_LOADED,
    });
  }

  switch (votingState.status) {
    case VotingStatus.REJECTED: {
      return (
        <Dialog open={true} maxWidth="sm" fullWidth>
          <DialogTitle>An Error Occurred</DialogTitle>
          <DialogContent>{votingState.error}</DialogContent>
        </Dialog>
      );
    }
    default:
      return (
        <Row>
          <VotingContext.Provider value={[votingState, dispatch]}>
            <Row>
              <VotingCards
                connected={status === WalletStatus.CONNECTED}
                loadVotes={loadVotes}
              />
            </Row>
            <Row>
              <Scoreboard
                connected={status === WalletStatus.CONNECTED}
                loadVotes={loadVotes}
              />
            </Row>
          </VotingContext.Provider>
        </Row>
      );
  }
}
