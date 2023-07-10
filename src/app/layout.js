import AppLayout from "@/components/AppLayout";
import "./globals.css";
import { Inter } from "next/font/google";
import MyCartProvider from "@/components/MyCartProvider";
import Head from "next/head";
import icon from './favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    // icons: {
    //     icon: icon
    // }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MyCartProvider>
                    <AppLayout>{children}</AppLayout>
                </MyCartProvider>
            </body>
        </html>
    );
}
