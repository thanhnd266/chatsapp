// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

//image
import SliderImg1 from '../../../assets/images/main-banner-1.png';
import SliderImg2 from '../../../assets/images/main-banner-2.png';
import SliderImg3 from '../../../assets/images/main-banner-3.png';

const MainSlider = () => {
    return (
        <div className="main-slider">
            <div className="main-slider__wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="home-slider"
                >
                    <SwiperSlide>
                        <div className="slider-slide__item">
                            <img src={SliderImg1} alt="slider1" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-slide__item">
                            <img src={SliderImg2} alt="slider2" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-slide__item">
                            <img src={SliderImg3} alt="slider3" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
 
export default MainSlider;