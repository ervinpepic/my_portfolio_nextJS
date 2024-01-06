import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeModeSwitcher from "./ThemeModeSwitcher";
import styles from "./ThemeModeSwitcher.module.css";
import ThemeProviderApp from "./ThemeProviderApp";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Ervin Pepic Portfolio",
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
    apple: "/static/images/apple-touch-icon.png",
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
  appleWebApp: true,
  keywords: [
    "Software developer",
    "portfolio",
    "developer"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-gray-100 dark:bg-[#2c333e]
              ${styles.themeSwitcher}`}
      >
        <AuthProvider>
          <ThemeProviderApp
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <ThemeModeSwitcher></ThemeModeSwitcher>
            <main>{children}</main>
          </ThemeProviderApp>
        </AuthProvider>
      </body>
    </html>
  );
}
