//SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import { Test } from  "forge-std/Test.sol";
import { Voting } from "../src/Voting.sol";

contract VotingTest is Test {

    Voting voting;

    function setUp() public {
        voting = new Voting();
    }

    function testAddVoting() public {
        voting.addProposal("Candidate A");
        assertEq(voting.getProposalsCount(), 1);
        (string memory name, uint256 votes) = voting.getProposal(0);
        assertEq(name, "Candidate A");
        assertEq(votes, 0);
    }
}