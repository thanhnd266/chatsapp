import { Card, Image } from "antd";
import { ListProductStyled } from "./styled";
const { Meta } = Card;

const ListProduct = () => {
  return (
    <ListProductStyled>
      <div className="home-product__wrapper">
        <div className="home-product__list">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                width={200}
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </ListProductStyled>
  );
};

export default ListProduct;
