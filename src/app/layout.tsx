import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css"
import Navbar from "./components/Navbar";

const notoSerifBangali = Noto_Serif_Bengali({

  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "This media cover all types of news",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBangali.className} h-full antialiased`}
    >
      <body className="min-h-full max-w-7xl mx-auto flex flex-col">
        <Navbar />
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
