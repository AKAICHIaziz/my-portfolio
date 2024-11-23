import "./globals.css";
import Navbar from "../components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";

export const metadata = {
  title: "Akaichi Aziz | Software Developer",
  description: "This is my portfolio website with latest updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="w-full h-full bg-background text-foreground flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html >
  );
}
