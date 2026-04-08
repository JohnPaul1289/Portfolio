import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Paul Gardoce | Full-Stack & AI Systems",
  description: "Bespoke digital experiences and AI-driven solutions engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <nav className="navbar glass-card">
          <div className="nav-container">
            <span className="nav-logo gradient-text">PORTFOLIO</span>
            <div className="nav-links">
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
