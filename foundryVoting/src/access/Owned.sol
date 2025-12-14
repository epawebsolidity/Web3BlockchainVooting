// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract Owned {
    address public admin;

    // ============================================
    // MODIFIERS
    // ============================================

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not Admin");
        _;
    }


    // ============================================
    // MAIN FUNCTIONS
    // ============================================
    
    constructor() {
        admin = msg.sender;
    }
}
