import "./globals.css";
import Header from "@/layout/header";
import Aside from "@/layout/aside";
import Footer from "@/layout/footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-amber-100 dark:bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex flex-1">
            <Aside />
            <main className="flex-1 p-6 bg-amber-100 dark:bg-gray-800 dark:text-white">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}