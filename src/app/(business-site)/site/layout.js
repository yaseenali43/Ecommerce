import MenuNavbar from "@/components/common/MenuNavbar";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import AlertBanner from "@/components/common/AlertBanner";

export default function SiteLayout({ children }) {
  return (
    <>
        <AlertBanner />
        <MenuNavbar />
        <main>
          {children}
          <ScrollToTop />
        </main>
        <Footer />
    </>
  );
}
