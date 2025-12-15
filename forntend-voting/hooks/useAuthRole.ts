"use client";

import abiVoting from "@/abi/abi";
import { publicClient } from "@/utils/chain";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_VOTING_CONTRACT! as `0x${string}`;

export function useAuthRole() {
  const { address, isConnected } = useAccount();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!isConnected || !address) {
        setIsAdmin(null);
        return;
      }

      setLoading(true);
      try {
        const adminAddress = await publicClient.readContract({
          address: CONTRACT_ADDRESS,
          abi: abiVoting,
          functionName: "admin",
        });

        setIsAdmin(
          adminAddress.toLowerCase() === address.toLowerCase()
        );
      } catch (err) {
        console.error("Failed to check admin:", err);
        setIsAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [address, isConnected]);

  return {
    isAdmin,
    isConnected,
    address,
    loading,
  };
}
