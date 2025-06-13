import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import './_styles/globals.css'

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body className="bg-[#141C24] text-[#D4DEE7] min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
