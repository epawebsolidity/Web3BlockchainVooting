"use client";


import abiVoting from "@/abi/abi";
import { useState } from "react";
import { useWalletClient } from "wagmi";

const votingContractAddress = process.env.NEXT_PUBLIC_VOTING_CONTRACT! as `0x${string}`;


export function useVotingContract() {
  const { data: walletClient } = useWalletClient();
  const [loading, setLoading] = useState(false);

  // Add proposal
  const addProposal = async (name: string) => {
   
    if (!walletClient) return;
    setLoading(true);
    console.log("Adding proposal:", name);
    try {
      const tx = await walletClient.writeContract({
        address: votingContractAddress,
        abi: abiVoting,
        functionName: "addProposal",
        args: [name],
      });
      console.log("Transaction Hash:", tx);
    } catch (err) {
      console.error(err);
    }
  };

  return {  addProposal, loading };
}
