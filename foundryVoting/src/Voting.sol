// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "./storage/VotingStorage.sol";
import "./access/Owned.sol";

contract Voting is VotingStorage, Owned {

    function addProposal(string memory name) public onlyOwner {
        proposals.push(Proposal(name, 0));
    }

    function vote(uint256 _proposalId) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(_proposalId < proposals.length, "Invalid proposal");
        hasVoted[msg.sender] = true;
        proposals[_proposalId].voteCount += 1;
    }


    function getProposalsCount() public view returns (uint256) {
        return proposals.length;
    }

    function getProposal(uint256 _id)
        public
        view
        returns (string memory, uint256)
    {
        Proposal memory p = proposals[_id];
        return (p.name, p.voteCount);
    }

}
