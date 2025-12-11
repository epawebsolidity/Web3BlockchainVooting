"use client";
import Providers from "@/app/providers";
import ContentWrapper from "@/components/Layout/ContentWrapper"; // import dari file terpisah
import LightProvider from "@/context/LightProvider";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <LightProvider>
                        <ContentWrapper>
                            {children}
                        </ContentWrapper>
                    </LightProvider>
                </Providers>
            </body>
        </html>
    );
}
