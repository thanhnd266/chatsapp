import { Swiper, SwiperSlide } from "swiper/react";
import { FamousBrandStyled } from "./styled.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Card, Image } from "antd";
import { famousBrand } from "@/contants/home/famousBrand";

const FamousBrand = () => {
  return (
    <FamousBrandStyled>
      <div className="famous-brand__wrapper">
        <div className="famous-brand__title">
          <h2>Thương hiệu nổi tiếng</h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {famousBrand.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                hoverable
                cover={<Image src={item.image} preview={false} />}
              >
                <div className="card-body__wrapper">
                  <div className="card-title">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </FamousBrandStyled>
  );
};

export default FamousBrand;
