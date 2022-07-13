import React, { useReducer, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Status from "../../global/Status";
import { VotingData } from "../../abis/VotingData";
import { ethers } from "ethers";
import { Scoreboard, VotingCards } from "../";
import { votingStatusReducer } from "../../global/reducer/votingStatusReducer";
import ExerciseType from "../../global/ExerciseType";

export const VotingContext = React.createContext();

export function VotingContextProvider({ web3State }) {
  const [votingContract, setVotingContract] = useState(null);
  const [votingState, dispatch] = useReducer(votingStatusReducer, {
    numWeightliftingVotes: 0,
    numCardioVotes: 0,
    status: Status.IDLE,
    error: null,
  });
  const { WEIGHTLIFTING } = ExerciseType;

  async function vote(event) {
    dispatch({
      type: Status.PENDING,
      votingState,
    });
    const chooseWeightlifting = event.target.value === WEIGHTLIFTING.value;
    const voteFunction = chooseWeightlifting
      ? votingContract.voteWeightlifting
      : votingContract.voteCardio;

    const tx = await voteFunction();
    tx.wait().then((res) => {
      dispatch({
        type: Status.VOTE_ACTION_RESOLVED,
        votingState,
      });
      loadVotes();
    });
  }

  async function loadVotes() {
    dispatch({
      type: Status.VOTES_LOADING,
    });
    //   const numWeightLiftingVotes = await votingContract.functions.weightliftingVotes();
    const numWeightliftingVotes = await votingContract.functions.getWeightliftingVotes();
    const numCardioVotes = await votingContract.functions.getCardioVotes();
    if (!numWeightliftingVotes[0] || !numCardioVotes[0]) {
      console.error("Could not fetch vote counts");
    }
    const votingState = {
      numWeightliftingVotes: numWeightliftingVotes[0],
      numCardioVotes: numCardioVotes[0],
    };

    dispatch({
      votingState,
      type: Status.VOTES_LOADED,
    });
  }

  useEffect(() => {
    if (!web3State.provider) {
      return;
    }
    // console.log("VotingContextProvider useEffect --- render");

    async function loadVotingContract() {
      console.log("loading voting contract");
      const abi = VotingData;
      const signer = web3State.provider.getSigner();
      const contract = await new ethers.Contract(
        "0x87aA67600E213900bBefa67eBA46afC352c2Fc69", //old
        // "0xB326177fF7884c2612f7a7cA31D8e24276d85dcd", //new
        abi,
        signer
      );
      contract.connect();
      setVotingContract(contract);
    }

    loadVotingContract();
  }, [web3State.provider]);

  useEffect(() => {
    // console.log("VotingContextProvider useEffect -- votingState - render");

    if (!votingContract) {
      return;
    }
    console.log("VotingContextProvider - votes initial load");

    async function votesInitialLoad() {
      await loadVotes();
    }
    votesInitialLoad();
  }, [votingContract]);

  function voteDisabled() {
    return !web3State.connected || votingState.status !== Status.VOTES_LOADED;
  }

  return (
    <VotingContext.Provider value={[votingState, dispatch]}>
      <Row>
        <VotingCards
          voteDisabled={() => voteDisabled()}
          votingState={votingState}
          web3State={web3State}
          voteCallback={vote}
        />
      </Row>
      <Row>
        <Scoreboard votingState={votingState} />
      </Row>
    </VotingContext.Provider>
  );
}
