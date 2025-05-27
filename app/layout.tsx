import { ReactNode } from "react";
import Navbar from "./components/navbar";
import TopActionsBar from "./components/topActionsBar";
import "./styles/global.css";
import { press_start_2p } from "./utils/fonts";

export const metadata = {
  title: "Stephanie Morales",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${press_start_2p.className} antialiased`}>
        <div className="background-global bg-hero-gradient flex flex-col h-screen w-screen overflow-hidden">
          <TopActionsBar />
          <main className="flex-1 overflow-auto pb-36 md:pb-48">
            <div className="h-full max-h-full overflow-auto">{children}</div>
          </main>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
