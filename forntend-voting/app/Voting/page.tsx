"use client";

import { TITLES } from "@/constants/title";
import { useLight } from "@/context/LightContext";
import { useTitle } from "@/hooks/useTitle";
import { useVotingContract } from "@/hooks/useVoting";
export default function Voting() {
    useTitle(TITLES.VOTING);
    const { on } = useLight();

    const { proposal } = useVotingContract();

    console.log("Current Proposal:", proposal);
    return (
        <div className="relative w-full md:w-[65%] order-2 md:order-2 hidden md:flex flex-col gap-6 p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Proposal Voting</h1>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                    Active
                </span>
            </div>

            {/* NFT Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((id) => (
                    <div
                        key={id}
                        className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm overflow-hidden transition hover:shadow-lg"
                    >
                        {/* NFT Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={`https://picsum.photos/seed/nft-${id}/600/400`}
                                alt="NFT"
                                className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                        </div>

                        {/* NFT Content */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">
                                NFT Proposal #{id}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Vote for this NFT to be selected as the winning proposal.
                            </p>

                            {/* Action */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs text-gray-400">
                                    On-chain voting
                                </span>

                                <button
                                    className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                >
                                    Vote
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {proposal && (
                <div>
                    <h3>{proposal.name}</h3>
                    <p>Votes: {proposal.votes}</p>
                </div>
            )}
        </div>

    )
}