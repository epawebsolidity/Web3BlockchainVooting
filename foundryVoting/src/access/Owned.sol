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
    // CONSTRUCTORS
    // ============================================
    
    constructor() {
        admin = msg.sender;
    }
}
