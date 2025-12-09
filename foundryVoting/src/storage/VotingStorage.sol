//SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract VotingStorage {
    struct Proposal {
        string name;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;
}