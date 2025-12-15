// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Script, console} from "forge-std/Script.sol";
import { Voting } from "../src/Voting.sol";


contract DeployVoting is Script {
    function run() external returns (Voting) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Voting voting = new Voting();
        console.log("Voting deployed to:", address(voting));
        console.log("Admin:", voting.admin());
        
        vm.stopBroadcast();
        return voting;
    }
}