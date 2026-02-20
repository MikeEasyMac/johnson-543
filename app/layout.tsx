import "./globals.css";
import Header from "@/layout/header";
import Aside from "@/layout/aside";
import Footer from "@/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        
        <Header />

        <div className="flex flex-1">
          <Aside />

          <main className="flex-1 p-6 bg-amber-100">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}