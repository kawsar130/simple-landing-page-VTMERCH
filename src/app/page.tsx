import BannerWithProducts from "./components/BannerWithProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import BookCollections from "./components/BookCollections";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroWithQuote from "./components/HeroWithQuote";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerWithProducts />
      <BestSellingProducts />
      <BookCollections />
      <HeroWithQuote />
      <Footer />
    </main>
  );
}
