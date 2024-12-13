import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { dbConnect } from "../lib/mongo";
import './globals.css';


export const metadata: Metadata = {
    title: 'hqd shop',
    description: 'Buy your favorite hqd',
    icons: {
        icon: '/favicon.ico',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
   await dbConnect();
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
