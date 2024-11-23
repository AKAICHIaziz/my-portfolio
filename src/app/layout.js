import "./globals.css";
import Navbar from "../components/Navbar"


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
      </body>
    </html >
  );
}
