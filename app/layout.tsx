import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={"antialiased"}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
