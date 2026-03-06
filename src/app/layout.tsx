import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countries App",
  description: "Explorador de países del mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}