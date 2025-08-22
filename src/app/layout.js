import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

// Correct Raleway font import
const raleway = Raleway({
  subsets: ["latin"], // Correct subset
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Best Interior architecture & furniture manufacturer in India",
  description: "Essentia is India's only full service design to build firm from concept to execution, furniture and furnishings to decor and styling. you think it , we build it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} font-sans antialiased bg-background text-foreground` }>
        <ThemeProvider attribute="class" enableSystem={true}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
