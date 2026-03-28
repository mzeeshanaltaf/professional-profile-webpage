import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/ZA.png",
  },
  title: "Zeeshan Altaf | AI Transformation Leader & Agentic AI Architect",
  description:
    "Building autonomous AI systems, agentic workflows & intelligent automation. Specializing in AI-powered SaaS, multi-agent systems, and RAG solutions.",
  keywords: [
    "AI Transformation Leader",
    "Agentic AI",
    "Automation",
    "Multi-Agent Systems",
    "RAG",
    "LLM",
    "AI SaaS",
  ],
  authors: [{ name: "Zeeshan Altaf" }],
  openGraph: {
    title: "Zeeshan Altaf | AI Transformation Leader & Agentic AI Architect",
    description:
      "Building autonomous AI systems, agentic workflows & intelligent automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Zeeshan3107",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "glass",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
