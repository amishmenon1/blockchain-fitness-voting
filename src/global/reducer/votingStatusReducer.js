import { toast } from "react-toastify";
import Status from "../../global/Status";

export function votingStatusReducer(state, action) {
  console.log("votingStatusReducer --- render");
  switch (action.type) {
    case Status.IDLE: {
      console.log("votingStatusReducer --- status: idle");
      return {
        status: Status.IDLE,
        votingState: null,
        error: null,
      };
    }
    case Status.PENDING: {
      console.log("votingStatusReducer --- status: pending");
      toast.warn("Placing vote...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...state,
        ...action.votingState,
        status: Status.PENDING,
        error: null,
      };
    }
    case Status.VOTES_LOADING: {
      console.log("votingStatusReducer --- status: votes loading");
      return {
        ...state,
        status: Status.VOTES_LOADING,
        error: null,
      };
    }
    case Status.VOTE_ACTION_RESOLVED: {
      console.log("votingStatusReducer --- status: resolved");
      toast.success("Vote successful. Please wait for vote count to refresh.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...action.votingState,
        status: Status.VOTE_ACTION_RESOLVED,
        error: null,
      };
    }
    case Status.VOTES_LOADED: {
      console.log("votingStatusReducer --- status: votes loaded");
      return {
        ...action.votingState,
        status: Status.VOTES_LOADED,
        error: null,
      };
    }

    case Status.REJECTED: {
      console.log(
        "VotingContextProvider --- reducer --- status: rejected",
        action.error
      );
      toast.error("Failed to fetch: " + action.error, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      });
      return {
        status: Status.REJECTED,
        data: null,
        error: action.error,
        endStatusCallback: state.endStatusCallback,
      };
    }
    default: {
      console.log("VotingContextProvider --- reducer --- should not occur");
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
