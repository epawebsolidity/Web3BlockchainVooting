import LightToggle from "@/components/Light/Light";
import Navbar from "@/components/Navbar/Navbar";
import { useLight } from "@/context/LightContext";
export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    const { on } = useLight();

    return (
        <div className={`flex min-h-screen w-full justify-center ${on ? "bg-yellow-200" : "bg-gradient-to-r from-[#03182a] to-[#0b1e3a]"}`}>
            <div className="max-w-7xl p-10 w-full">
                <Navbar />
                {children}
                <div className="flex justify-end items-end fixed bottom-4 right-4 animate-bounce size-10">
                    <LightToggle />
                </div>
            </div>
        </div>
    );
}