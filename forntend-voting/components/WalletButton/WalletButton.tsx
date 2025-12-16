"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletButton() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                if (!mounted) return null;

                if (!account || !chain) {
                    return (
                        <button
                            onClick={openConnectModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Connect Wallet
                        </button>
                    );
                }

                return (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={openChainModal}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            {chain.name}
                        </button>
                        <button
                            onClick={openAccountModal}
                            className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                            {account.displayName}
                        </button>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}
