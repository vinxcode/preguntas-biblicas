import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "./Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Preguntas de la Biblia",
  description: "Prueba tu conocimiento acerca de la biblia. Juega con los mazos ya creados o crea los tuyos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-white-bg text-foreground">
        <main className="min-h-screen flex flex-col items-center w-full md:w-[766px] lg:w-[850px] xl:w-[1080px] md:mx-auto p-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
