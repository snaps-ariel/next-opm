import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Suspense } from "react";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오프린트미 :: 쉽고 빠른 홍보물 제작 OHPRINTME",
  description:
    "오프린트미와 함께 누구나 쉽게 브랜드 홍보물을 만들고, 보다 특별하게 나만의 브랜딩을 시작해보세요.",
  icons: {
    icon: "https://front-cdn.ohprint.me/assets/ko_kr/pc/images/common/favicon.ico?v=1695352970961",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  href="https://front-cdn.ohprint.me/assets/ko_kr/pc/images/common/favicon.ico?v=1695352970961"*/}
      {/*  sizes="any"*/}
      {/*/>*/}
      <body className={inter.className}>
        <Suspense>
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </Suspense>
      </body>
    </html>
  );
}
