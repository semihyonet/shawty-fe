import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/header";
import {ShawtyProvider} from "@/context/context";
import NegativeNotification from "@/components/notifications/negativeNotification";
import ShortenUrlResponseModal from "@/components/modals/shortenUrlResponseModal";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Shawty URL Shortener",
    description: "Shawty your URLs with ease!",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={"bg-bg-color"}>
        <ShawtyProvider>
            <main className={"min-h-screen"}>
                <NegativeNotification/>
                <ShortenUrlResponseModal/>
                <Header/>
                {children}
            </main>
        </ShawtyProvider>
        </body>
        </html>
    );
}
