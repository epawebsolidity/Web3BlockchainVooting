"use client";
import Providers from "@/app/providers";
import ContentWrapper from "@/components/Layout/ContentWrapper"; // import dari file terpisah
import LightProvider from "@/context/LightProvider";
import { VotingProvider } from "@/context/VotingContext";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <LightProvider>
                        <VotingProvider>
                        <ContentWrapper>
                            {children}
                        </ContentWrapper>
                        </VotingProvider>
                    </LightProvider>
                </Providers>
            </body>
        </html>
    );
}
