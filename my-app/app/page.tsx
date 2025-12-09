"use client";

import { TITLES } from "@/constants/title";
import { useTitle } from "@/hooks/useTitle";
import Image from "next/image";

export default function LoginPage() {
  useTitle(TITLES.LOGIN);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 py-20 gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-white">
          Decentralized Voting Platform
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          A secure and transparent way to vote with blockchain technology.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className="border border-black px-6 py-3 rounded hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-full h-96 md:w-1/2">
        <Image
          src="/images/hero-image.png"
          alt="Voting Illustration"
          fill
          className="object-contain rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
