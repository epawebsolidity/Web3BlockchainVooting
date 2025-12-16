"use client";

import abiVoting from "@/abi/abi";
import { useEffect, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";

const votingContractAddress =
  process.env.NEXT_PUBLIC_VOTING_CONTRACT as `0x${string}`;

export function useVotingContract() {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<string>("");

  // 🔹 READ: getProposal
  useEffect(() => {
    if (!publicClient) return;

    const fetchProposal = async () => {
      try {
        const result = await publicClient.readContract({
          address: votingContractAddress,
          abi: abiVoting,
          functionName: "getProposal",
          args: [0],
        });
console.log("RAW result from readContract:", result);

      const [name, votes] = result as [string, bigint];

setProposal({
  name,
  votes: Number(votes),
});
      } catch (err) {
        console.error("Read proposal error:", err);
      }
    };

    fetchProposal();
  }, [publicClient]);

  // 🔹 WRITE: addProposal
  const addProposal = async (name: string) => {
    if (!walletClient) return;

    setLoading(true);
    try {
      const hash = await walletClient.writeContract({
        address: votingContractAddress,
        abi: abiVoting,
        functionName: "addProposal",
        args: [name],
      });

      console.log("Tx hash:", hash);
    } catch (err) {
      console.error("Add proposal error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    proposal,
    addProposal,
    loading,
  };
}
