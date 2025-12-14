// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "./storage/VotingStorage.sol";
import "./access/Owned.sol";

contract Voting is VotingStorage, Owned {

    /// @notice Admin Menambah Proposal
    function addProposal(string memory name) public onlyAdmin {
        proposals.push(Proposal(name, 0));
        emit AddProposalVoting(msg.sender, name, 0);
    }

    /// @notice Users Votting Proposal
    function voteProposal(uint256 proposalIndex) public {
        require(proposalIndex < proposals.length, "Proposal tidak ada");
        require(!hasVoted[msg.sender], "Sudah memilih");
        hasVoted[msg.sender] = true;
        proposals[proposalIndex].voteCount += 1;
        emit Voted(msg.sender, proposalIndex);
    }

    // ============================================
    // VIEW FUNCTIONS
    // ============================================

    function getProposal(uint256 index) public view returns (string memory, uint256) {
        Proposal storage p = proposals[index];
        return (p.name, p.voteCount);
    }

}
