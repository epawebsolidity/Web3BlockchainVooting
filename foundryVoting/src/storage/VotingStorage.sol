// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract VotingStorage {

    // ============================================
    // STRUCT
    // ============================================

    struct Proposal {
        string name;
        uint256 voteCount;
    }

    // ============================================
    // MAPPING
    // ============================================

    Proposal[] public proposals;
    
    mapping(address => bool) public hasVoted;


    // ============================================
    // EVENT
    // ============================================

    event AddProposalVoting(
        address indexed admin,
        string name,
        uint256 voteCount
    );

    event Voted(
        address indexed voter,
        uint256 indexed proposalIndex
    );
}
