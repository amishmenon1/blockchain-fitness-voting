// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.7;

contract Voting{
    uint public weightliftingVotes;
    uint public cardioVotes;

    constructor(){
        weightliftingVotes = 0;
        cardioVotes = 0;
    }

    function voteWeightlifting () public {
        weightliftingVotes += 1;
    }

    function voteCardio () public {
        cardioVotes += 1;
    }

}