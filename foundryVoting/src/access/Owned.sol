// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract Owned {
    address internal owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
}
