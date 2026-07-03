import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Wallace Martins | Desenvolvedor Full Stack",
  description:
    "Portfólio de Wallace Martins, desenvolvedor Full Stack com foco em integrações, APIs, aplicações web e cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={"antialiased"}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
