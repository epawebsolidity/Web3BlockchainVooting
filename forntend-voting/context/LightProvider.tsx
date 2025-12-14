"use client";

import { LightToggleProps } from "@/type/LightToggle";
import { useEffect, useState } from "react";
import LightContext from "./LightContext";

export default function LightProvider({ children }: { children: React.ReactNode }) {
    const [on, setOn] = useState<boolean>(false);
    useEffect(() => {
        const saved = localStorage.getItem("light_on") === "true";
        const id = setTimeout(() => {
            setOn(saved);
        }, 0);

        return () => clearTimeout(id); // cleanup
    }, []);

    useEffect(() => {
        localStorage.setItem("light_on", String(on));
    }, [on]);

    const value: LightToggleProps = { on, setOn };

    return (
        <LightContext.Provider value={value}>
            {children}
        </LightContext.Provider>
    );
}
