import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ReactNode} from "react";
import {TanStackProvider} from "@/components/TanStackProvider/TanStackProvider";
import { Metadata } from "next";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    variable: "--font-roboto",
    display: 'swap',
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://your-domain.com'),
    title: "NoteHub - Your Digital Note Management Solution",
    description: "Organize, manage, and access your notes efficiently with NoteHub. Create, edit, and categorize notes with tags for better productivity.",
    openGraph: {
        title: "NoteHub - Your Digital Note Management Solution",
        description: "Organize, manage, and access your notes efficiently with NoteHub. Create, edit, and categorize notes with tags for better productivity.",
        url: "/",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                width: 1200,
                height: 630,
                alt: "NoteHub - Digital Note Management",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                       modal,
                                   }: Readonly<{
    children: ReactNode;
    modal: ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={roboto.variable}>
        <TanStackProvider>
            <div className="wrapper">
                <Header/>
                <main>
                    <div className="container">
                        {children}
                        {modal}
                    </div>
                </main>
                <Footer/>
            </div>
        </TanStackProvider>
        </body>
        </html>
    );
}
