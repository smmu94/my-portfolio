import './styles/global.css';
import { press_start_2p } from './utils/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${press_start_2p.className} antialiased`}
      >
        <div className="background-global">
          {/* <Navbar /> */}
          <main className="relative z-20 flex-grow p-8 min-h-screen">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
