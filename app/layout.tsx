import Nav from "@/component/nav";
import "aos/dist/aos.css";
import "@/styles/globals.css";

export const metadata = {
  title: "포트폴리오",
  description: "응애 나 애기 포폴",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
