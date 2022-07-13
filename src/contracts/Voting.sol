// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.7;

contract Voting{
    int weightlifting;
    int cardio;

    constructor(){
        weightlifting = 0;
        cardio = 0;
    }

    function getWeightliftingVotes () public view returns(int) {
        return weightlifting;
    }

    function getCardioVotes () public view returns(int) {
        return cardio;
    }

    function voteWeightlifting () public {
        weightlifting = weightlifting + 1;
    }

    function voteCardio () public {
        cardio = cardio + 1;
    }

}