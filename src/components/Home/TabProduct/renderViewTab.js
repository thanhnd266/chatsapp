import { Card, Image } from "antd";
import { formatCurrencyValue } from "utils/helpers";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const renderViewTab = (data) => {
  return (
    <div className="tab-content">
      <div className="tab-content__mark"></div>
      <div className="tab-content__wrapper">
        <div className="btn-view-all d-flex justify-content-end mb-2">
          <a className="btn-view-all__link" href="/">
            <span className="me-2">View all</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1500: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<Image src={item.image} preview={false} />}
              >
                <div className="card-body__wrapper">
                  <div className="card-title">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="card-description">
                    <span>{item.description}</span>
                  </div>
                  <div className="card-sale">
                    <h3>{formatCurrencyValue(`${item.salePrice}`)}đ</h3>
                  </div>
                  <div className="card-price">
                    <h3>{formatCurrencyValue(`${item.price}`)}đ</h3>
                  </div>

                  <div className="card-save-money">
                    <h6>Tiết kiệm</h6>
                    <h4>
                      {formatCurrencyValue(`${item.price - item.salePrice}`)}đ
                    </h4>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default renderViewTab;
