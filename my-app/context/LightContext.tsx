"use client";
import { LightToggleProps } from "@/type/LightToggle";
import { createContext, useContext } from "react";

const LightContext = createContext<LightToggleProps | null>(null);

export const useLight = () => {
    const ctx = useContext(LightContext);
    if (!ctx) throw new Error("useLight must be used inside LightProvider");
    return ctx;
};

export default LightContext;
