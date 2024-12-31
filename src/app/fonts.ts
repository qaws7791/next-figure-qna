import { Noto_Sans_KR, Roboto } from "next/font/google";

export const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: "500",
  subsets: ["latin"],
});
