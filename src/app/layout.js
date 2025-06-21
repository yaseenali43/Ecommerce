import { CartWishlistProvider } from "@/context/CartWishListProvider";
import "./globals.css";
import { Bai_Jamjuree, Roboto, Space_Grotesk } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
// Load Inter for paragraphs


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",   // This will create a CSS variable for the font
  subsets: ["latin"],
});

const baijamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Electronics Store",
  description: " Ecommerce Application ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${baijamjuree.variable}`}>
        <AuthProvider>
          <CartWishlistProvider>{children}</CartWishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

