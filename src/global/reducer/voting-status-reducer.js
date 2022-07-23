import { toast } from "react-toastify";
import VotingStatus from "global/voting-status";

export function votingStatusReducer(state, action) {
  console.log("votingStatusReducer --- render");
  switch (action.type) {
    case VotingStatus.IDLE: {
      console.log("votingStatusReducer --- status: idle");
      return {
        status: VotingStatus.IDLE,
        votingState: null,
        error: null,
      };
    }
    case VotingStatus.PENDING: {
      console.log("votingStatusReducer --- status: pending");
      toast.warn("Placing vote...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...state,
        ...action.votingState,
        status: VotingStatus.PENDING,
        error: null,
      };
    }
    case VotingStatus.VOTES_LOADING: {
      console.log("votingStatusReducer --- status: votes loading");
      return {
        ...state,
        status: VotingStatus.VOTES_LOADING,
        error: null,
      };
    }
    case VotingStatus.VOTE_ACTION_RESOLVED: {
      console.log("votingStatusReducer --- status: resolved");
      toast.success("Vote successful. Please wait for vote count to refresh.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...action.votingState,
        status: VotingStatus.VOTE_ACTION_RESOLVED,
        error: null,
      };
    }
    case VotingStatus.VOTES_LOADED: {
      console.log("votingStatusReducer --- status: votes loaded");
      return {
        ...action.votingState,
        status: VotingStatus.VOTES_LOADED,
        error: null,
      };
    }

    case VotingStatus.REJECTED: {
      debugger;
      console.log(
        "VotingContextProvider --- reducer --- status: rejected",
        action.error
      );
      toast.error(
        "Failed to fetch. Check Metamask connection: " + action.error,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 10000,
        }
      );
      return {
        status: VotingStatus.REJECTED,
        // data: null,
        error: action.error,
      };
    }
    default: {
      console.log("VotingContextProvider --- reducer --- should not occur");
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
