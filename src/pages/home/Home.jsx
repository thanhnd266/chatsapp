import BannerAd from "@/components/Home/BannerAd";
import FamousBrand from "@/components/Home/FamousBrand";
import ListProduct from "@/components/Home/ListProduct";
import MainSlider from "@/components/Home/MainSlider";
import TabProduct from "@/components/Home/TabProduct";
import { HomepageStyled } from "./styled";

const Home = () => {
  return (
    <HomepageStyled>
      <MainSlider />
      <TabProduct />
      {/* <ListProduct /> */}
      <FamousBrand />
      <BannerAd />
    </HomepageStyled>
  );
};

export default Home;
