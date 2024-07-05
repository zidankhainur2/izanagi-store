import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Izanagi Store",
  description:
    "Temukan gaya Anda dengan koleksi fashion eksklusif kami. Mulai dari pakaian sehari-hari hingga gaya formal, Izanagi hadir untuk memenuhi kebutuhan Anda.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
