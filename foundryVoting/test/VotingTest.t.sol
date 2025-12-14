//SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import { Test } from  "forge-std/Test.sol";
import { Voting } from "../src/Voting.sol";

contract VotingTest is Test {

    Voting public voting;

    address public admin;

    event AddProposalVoting(
        address indexed admin,
        string name,
        uint256 voteCount
    );

    function setUp() public {
        admin = address(this);

        voting = new Voting();

        vm.deal(admin, 100 ether);
    }

    function testAddVoting() public {
        // expect event
        vm.expectEmit(true, false, false, true);
        emit AddProposalVoting(
            admin,
            "Candidate A",
            0
        );

        voting.addProposal("Candidate A");
    }

    function testGetProposal() public {
        voting.addProposal("Candidate A");
        (string memory name, uint256 votes) = voting.getProposal(0);
        assertEq(name, "Candidate A");
        assertEq(votes, 0);
    }

    function testVotingProposal() public {
        voting.addProposal("Candidate A");

        // vote
        voting.voteProposal(0);

        // cek vote count
        (string memory name, uint256 votes) = voting.getProposal(0);
        assertEq(name, "Candidate A");
        assertEq(votes, 1);

        // cek voter sudah tercatat
        assertTrue(voting.hasVoted(address(this)));
    }

}