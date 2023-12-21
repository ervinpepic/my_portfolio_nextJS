import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeModeSwitcher from "./ThemeModeSwitcher";
import styles from "./ThemeModeSwitcher.module.css";
import ThemeProviderApp from "./ThemeProviderApp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ervin Pepic | Portfolio",
  description: "Software developer portfolio",
  metadataBase: new URL("https://my-portfolio-next-js-pi.vercel.app/"),
  openGraph: {
    title: "Ervin Pepic Porfolio",
    url: "https://my-portfolio-next-js-pi.vercel.app/",
    description: "Ervin Pepic Portfolio",
    type: "website",
    images: [
      {
        url: "/static/images/profile/open_graph_profile_picture.png",
      },
    ],
  },
  icons: {
    apple: [
      "/static/images/favicons/apple-touch-icon.png",
      "/static/images/favicons/safari-pinned-tab.svg",
    ],
    icon: "/static/images/favicons/mstile-144x144.png",
  },
  twitter: {
    card: "summary_large_image",
    description: "Software Developer Portfolio",
    title: "Ervin Pepic Twitter",
    images: [
      {
        url: "/static/images/profile/open_graph_profile_picture.png",
      },
    ],
  },
  manifest: "/static/images/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#2c333e] 
              ${styles.themeSwitcher}`}
      >
        <ThemeProviderApp attribute="class" defaultTheme="sysetm" enableSystem>
          <ThemeModeSwitcher></ThemeModeSwitcher>
          <main>{children}</main>
        </ThemeProviderApp>
      </body>
    </html>
  );
}
