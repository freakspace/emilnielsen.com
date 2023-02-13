import "./globals.css";

import Nav from "./Components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <head />
      <body>{children}</body>
    </html>
  );
}
