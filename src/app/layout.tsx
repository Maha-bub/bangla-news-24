import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css"
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";

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
      <body className="min-h-full  flex flex-col">
        <Navbar />
        <Marquee></Marquee>
        <main className="max-w-7xl mx-auto">{children}</main>
        <div>Footer</div>
      </body>
    </html>
  );
}
