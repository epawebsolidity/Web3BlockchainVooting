import { createPublicClient, defineChain, http } from "viem";

export const mantleChainTestnet = defineChain({
  id: 5003,
  name: "Mantle Sepolia Testnet",
  network: "mantle-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MTL",
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_MANTLE_RPC!],
    },
  },
  blockExplorers: {
    default: {
      name: "MantleChainScan",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
  fees: {
    defaultPriorityFee: () => 1n,
    defaultBaseFee: () => 1_000_000_000n,
  },
});

export const publicClient = createPublicClient({
  chain: mantleChainTestnet,
  transport: http(mantleChainTestnet.rpcUrls.default.http[0]),
});
