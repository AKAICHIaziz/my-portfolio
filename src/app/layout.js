import "./globals.css";
import Navbar from "../components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Akaichi Aziz | Software Developer",
  description: "This is my portfolio website with latest updates.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} dark`}>
      <body className="w-full h-full bg-background text-foreground flex flex-col">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html >
  );
}
