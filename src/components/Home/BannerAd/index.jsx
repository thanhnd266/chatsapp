import bannerAdImg1 from "@/assets/images/banner-ad-1.png";
import bannerAdImg2 from "@/assets/images/banner-ad-2.png";

import React from "react";

const BannerAd = () => {
  return (
    <div className="banner-ad">
      <div className="banner-ad__wrapper">
        <div className="banner-ad__item">
          <img src={bannerAdImg1} alt="" />
        </div>

        <div className="banner-ad__item">
          <img src={bannerAdImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
