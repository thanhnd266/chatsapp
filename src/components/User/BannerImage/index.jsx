import { Avatar, Image } from "antd";
import ListFriend from "../listFriend";

const BannerImage = () => {
  const url = "https://cdn-icons-png.flaticon.com/512/5556/5556512.png";

  return (
    <div className="banner-image">
      <div className="banner-image_wrapper">
        <Image
          width="100%"
          height={420}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 5,
          }}
          src="https://lh3.googleusercontent.com/1TQOnwV9Ng_vKEsa7uV06RMOcj4_f3HnxqJ7ygVO13BaO0Bb3B5qFp3Y3dYQFpENuOxjvPDk-277K12BwvgO-jb1DCD70_vgkh_SlBGJeLeOSZ7C7N58vit2yrkeEwd9QJxQFcOUF2fseWa4A3Yai9FEJumYMoTdzPgPZkxHYQ90ck52Q4ZCqgPesTlRelCpn-jqi7a6EfTliohGSdrOjsnjENNRQOEeVXsQu8HBgX6M7Oupxp4m29dHgLdCsmHQQn-nR1TWCflNUsZZo9sXNmd5ReOaGBnvcrI8S_oKGRTOA93TOSbr8ba48MxpuuVAYgCJtN7KYozrk1FjLjyEPPJa1Aj6sWoPK5arO6LzKVpfyh7pvlTSp2iP8PKX26glXDcRzv_uoCbTBKpoAqJUP4jHlZalOJHBg2B5XRs8FZQBafdL4nrDuuSztfceoze5YMJGsoYu5Aep5YRykzzTCvn9_3rbcZpuQeFf_GmBp9KRKoF1s-6qB0oQpRR7gbl7tOQwYdNuPy45kBuT-6NCR0MrIBNCZjAc6ctv5CZHguLfTiFuLMaaxIJ77KQeedEy7Oh2nhlikUMu9hjC8dVOjrc6qOfrBpV5JH-KKNlPSgDPj5HDA1d6Jklul_LjHhT05646BNN6PWdaNdx0LKOTNjhEDJPcJ0Nl=w1518-h858-no"
        />

        <div className="image-avatar">
          <div className="image-avatar__img">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              src={url}
            />
          </div>
          <div className="image-avatar__info">
            <h4>Duy Thanh</h4>
            <div
              style={{
                fontWeight: 700,
                margin: "4px 0 4px 2px",
                textShadow: "2px 2px 2px #000",
              }}
            >
              26 Friends
            </div>
            <ListFriend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
