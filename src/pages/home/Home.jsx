import ListProduct from "components/Home/ListProduct";
import MainSlider from "components/Home/MainSlider";
import TabProduct from "components/Home/TabProduct";


const Home = () => {

  return (
    <div className="homepage">
      <MainSlider />
      <TabProduct />
      {/* <ListProduct /> */}
    </div>
  );
};

export default Home;
