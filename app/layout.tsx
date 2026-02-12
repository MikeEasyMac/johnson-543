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
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <div style={{ display: "flex", flex: 1 }}>
          <Aside />
          <main style={{ flex: 1, padding: "24px" }}>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
