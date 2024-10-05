import BannerWithProducts from "./components/BannerWithProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerWithProducts />
      <BestSellingProducts />
    </main>
  );
}
