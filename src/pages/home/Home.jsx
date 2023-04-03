import BannerAd from "components/Home/BannerAd";
import FamousBrand from "components/Home/FamousBrand";
import ListProduct from "components/Home/ListProduct";
import MainSlider from "components/Home/MainSlider";
import TabProduct from "components/Home/TabProduct";


const Home = () => {

  return (
    <div className="homepage">
      <MainSlider />
      <TabProduct />
      {/* <ListProduct /> */}
      <FamousBrand />
      <BannerAd />
    </div>
  );
};

export default Home;
