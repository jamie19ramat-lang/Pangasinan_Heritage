import HeaderNavigation from "../components/organisms/HeaderNavigation";
import Hero from "../components/organisms/Hero";
import HeritageGrid from "../components/organisms/HeritageGrid";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
  return (
    <>
      <HeaderNavigation />
      <main>
        <Hero />
        <HeritageGrid />
      </main>
      <Footer />
    </>
  );
}