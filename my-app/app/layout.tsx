import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    return (
        <html lang="en">
            <div className="flex min-h-screen bg-black w-full justify-center">
                <div className="max-w-6xl p-10 w-full">
                    <Navbar />
                    <body>
                        <main>
                            {children}
                        </main>
                    </body>
                </div>
            </div>
        </html>
    );
}
