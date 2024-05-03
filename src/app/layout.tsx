// eslint-disable-next-line filenames/match-exported
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New as ZenKakuGothicNew } from "next/font/google";
import "react-modal-video/scss/modal-video.scss";
import "react-modern-drawer/dist/index.css";
import "react-multi-carousel/lib/styles.css";
import "ress";
import "./globals.scss";
import Layout from "@/components/Layout";

const zenKakuGothicNew = ZenKakuGothicNew({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  description:
    "作曲家、成田旬のウェブサイトNatsuzolabです。歌物、劇伴、ゲームのBGMなど様々な業務を行っております。",
  title: "Natsuzolab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body className={zenKakuGothicNew.className}>
        <Layout>{children}</Layout>
      </body>
      {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
