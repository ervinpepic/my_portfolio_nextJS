import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeModeSwitcher from "./Theme/ThemeModeSwitcher";
import { ThemeProvider } from "./Theme/ThemeProviderApp";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Ervin Pepic portfolio",
  title: "Ervin Pepic | Portfolio",
  description: "Software developer",
  metadataBase: new URL("https://ervinpepic.com/"),

  openGraph: {
    title: "Ervin Pepic porfolio",
    url: "https://ervinpepic.com/",
    description: "Software developer",
    type: "website",
    images: [
      {
        url: "/static/images/profile/open_graph_profile_picture.png",
      },
    ],
  },

  icons: {
    apple: "/static/images/favicons/apple-touch-icon.png",
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
  keywords: ["software developer", "portfolio", "developer", "ervin pepic"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-gray-100 dark:bg-[#2c333e]
        `}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <AuthProvider>
            <ThemeModeSwitcher />
            <main>{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
