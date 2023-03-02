import { Tabs } from "antd";
import { itemsProductTab } from "contants/home/tabProduct";

  
const TabProduct = () => {
    return (
        <div className="tab-product">
            <Tabs
                defaultActiveKey="1"
                type="card"
                items={itemsProductTab}
            />
        </div>
    );
}
 
export default TabProduct;