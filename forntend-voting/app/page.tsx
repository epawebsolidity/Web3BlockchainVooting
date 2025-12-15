"use client";

import { TITLES } from "@/constants/title";
import { useLight } from "@/context/LightContext";
import { useVoting } from "@/context/VotingContext";
import { useAuthRole } from "@/hooks/useAuthRole";
import { useTitle } from "@/hooks/useTitle";
import { useVotingContract } from "@/hooks/useVoting";
import Vote01 from "@/public/assert/vote/vote1.jpg";
import Vote02 from "@/public/assert/vote/vote2.jpg";
import Vote03 from "@/public/assert/vote/vote3.jpg";
import Image from "next/image";

export default function LoginPage() {
  useTitle(TITLES.HOME);

  const { name, setName } = useVoting();
  const { loading, addProposal } = useVotingContract(name, setName);
  const { isAdmin } = useAuthRole();
  const { on } = useLight();

  return (<>
    <div className="flex flex-col md:flex-row justify-between items-center md:px-10 md:py-20 md:gap-10">
      <div className="md:w-1/4 text-center md:text-left md:order-1">

        {/* Judul */}
        <div className="order-1">
          <h1 className={`text-5xl font-bold ${on ? "text-black" : "text-white"}`}>
            Decentralized Voting Platform
          </h1>
        </div>

        {/* CARD IMAGE MOBILE */}
        <div className="order-2 md:hidden mt-4">
          <div className="flex gap-4 p-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {/* CARD 1 */}
            <div className="w-20 bg-[#31126b] rounded-xl text-white overflow-hidden transform rotate-[-8deg] transition-all duration-300 shadow-xl hover:rotate-0 hover:scale-105 snap-center">
              <Image src={Vote01} className="w-full" alt="NFT" />
            </div>
            {/* CARD 2 */}
            <div className="w-20 bg-[#31126b] rounded-xl text-white overflow-hidden transform rotate-[3deg] transition-all duration-300 shadow-xl hover:rotate-0 hover:scale-105 snap-center">
              <Image src={Vote02} className="w-full" alt="NFT" />
            </div>
            {/* CARD 3 */}
            <div className="w-20 bg-[#31126b] rounded-xl text-white overflow-hidden transform rotate-[10deg] transition-all duration-300 shadow-xl hover:rotate-0 hover:scale-105 snap-center">
              <Image src={Vote03} className="w-full" alt="NFT" />
            </div>
          </div>
        </div>

        {/* Deskripsi + Buttons */}
        <div className="order-3 mt-6">
          <p className={`text-lg ${on ? "text-black" : "text-white"} max-w-xl`}>
            A secure and transparent way to vote with blockchain technology.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4 whitespace-nowrap">
            <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-200 transition">
              Get Started
            </button>
            <button className="bg-red-600 px-6 py-3 rounded-full text-white font-bold hover:bg-red-400 transition">
              Learn More
            </button>
          </div>
        </div>

      </div>


      <div className="relative md:block hidden w-full md:w-[65%] order-2 md:order-2">

        <div className="
      flex gap-4 p-4 overflow-x-auto 
      snap-x snap-mandatory 
      scrollbar-hide
      md:gap-6 md:p-10 md:overflow-x-visible
  ">

          {/* CARD 1 */}
          <div className="
        w-72 md:w-72 bg-[#31126b] rounded-xl text-white overflow-hidden
        transform rotate-[-8deg] transition-all duration-300 shadow-xl
        hover:rotate-0 hover:scale-105
        snap-center
      ">
            <Image src={Vote01} className="w-full" alt="NFT" />
            <div className="p-4 hidden md:block">
              <h3 className="text-lg font-bold">Generation Mile #1</h3>
              <p className="text-sm opacity-70">Votting Gen Mile</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="
        w-72 md:w-72 bg-[#31126b] rounded-xl text-white overflow-hidden
        transform rotate-[3deg] transition-all duration-300 shadow-xl
        hover:rotate-0 hover:scale-105
        snap-center
      ">
            <Image src={Vote02} className="w-full" alt="NFT" />
            <div className="p-4 hidden md:block">
              <h3 className="text-lg font-bold">Generation Z #2</h3>
              <p className="text-sm opacity-70">Votting Gen Z</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="
        w-72 md:w-72 bg-[#31126b] rounded-xl text-white overflow-hidden
        transform rotate-[10deg] transition-all duration-300 shadow-xl
        hover:rotate-0 hover:scale-105
        snap-center
      ">
            <Image src={Vote03} className="w-full" alt="NFT" />
            <div className="p-4 hidden md:block">
              <h3 className="text-lg font-bold">Generation Alva #3</h3>
              <p className="text-sm opacity-70">Votting Gen Alva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-10 flex justify-center">
      {isAdmin ? (
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 
                    p-8 rounded-2xl 
                    bg-black backdrop-blur-md 
                    border border-white/20 shadow-xl">

          {/* LEFT – FORM */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">
              Add New Proposal
            </h2>

            <p className="text-sm text-gray-300">
              Create a new proposal that users can vote on.
            </p>

            <input
              type="text"
              placeholder="Proposal name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 text-white 
                     border border-white/20 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => addProposal(name)}
              disabled={loading || !name}
              className="mt-2 px-6 py-3 rounded-lg font-semibold
                     bg-gradient-to-r from-blue-500 to-purple-600
                     hover:opacity-90 transition
                     disabled:opacity-50"
            >
              {loading ? "Sending..." : "Add Proposal"}
            </button>
          </div>

          {/* RIGHT – INFO PANEL */}
          <div className="flex flex-col justify-between rounded-xl 
                      bg-black/40 p-6 border border-white/10">

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Admin Panel
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                You are logged in as an <span className="text-blue-400 font-semibold">Admin</span>.
                Only admins can create proposals. Once submitted, proposals
                will be available for users to vote on.
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold 
                           rounded-full bg-green-500/20 text-green-400">
                Admin Access Granted
              </span>
            </div>
          </div>

        </div>
      ) : (
        <div className="mt-10 p-6 rounded-xl border border-red-500/40 bg-red-500/10">
          <p className="text-center text-red-400 font-semibold">
            🚫 You do not have permission to access this page.
          </p>
        </div>
      )}
    </div>
  </>
  );
}
