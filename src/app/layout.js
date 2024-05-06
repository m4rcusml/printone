import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Print One",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={questrial.className}>
        {children}
      </body>
    </html>
  );
}
