import { Tabs } from "antd";
import { itemsProductTab } from "contants/home/tabProduct";
import { TabProductStyled } from "./styled";

const TabProduct = () => {
  return (
    <TabProductStyled>
      <Tabs defaultActiveKey="1" type="card" items={itemsProductTab} />
    </TabProductStyled>
  );
};

export default TabProduct;
