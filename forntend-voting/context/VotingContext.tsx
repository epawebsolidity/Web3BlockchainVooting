"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface VotingContextType {
    name: string;
    setName: (val: string) => void;
}

const VotingContext = createContext<VotingContextType | undefined>(undefined);

export function VotingProvider({ children }: { children: ReactNode }) {
    const [name, setName] = useState("");

    return (
        <VotingContext.Provider value={{ name, setName }}>
            {children}
        </VotingContext.Provider>
    );
}

export function useVoting() {
    const context = useContext(VotingContext);
    if (!context) throw new Error("useVoting must be used within VotingProvider");
    return context;
}
