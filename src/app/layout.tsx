import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'EcomShop - Your Ultimate Online Shopping Destination',
  description: 'Discover high-quality products and enjoy a seamless online shopping experience with EcomShop. Electronics, fashion, home goods & more.',
  keywords: ["e-commerce, online store, shop, products, electronics, fashion, home goods, deals, responsive"],
  openGraph: {
    "title": "EcomShop - Shop Smarter, Live Better",
    "description": "Find everything you need with ease and confidence. Curated selection, secure checkout, and fast shipping.",
    "url": "https://ecomshop.com",
    "siteName": "EcomShop",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/online-shopping-happy-young-man-using-smartphone-plastic-credit-card-paying-internet-standing_1258-163168.jpg",
        "alt": "Person shopping online with EcomShop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "EcomShop - Your Ultimate Online Shopping Destination",
    "description": "Discover high-quality products and enjoy a seamless online shopping experience with EcomShop.",
    "images": [
      "http://img.b2bpic.net/free-photo/online-shopping-happy-young-man-using-smartphone-plastic-credit-card-paying-internet-standing_1258-163168.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
