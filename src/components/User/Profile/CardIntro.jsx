import { InfoCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import ButtonComponent from "@/components/ButtonComponent";

const CardIntro = () => {
  return (
    <Card
      title="Intro"
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div className="card-content">
        <span className="card-content__icon">
          <i className="fa-solid fa-graduation-cap"></i>
        </span>
        <span className="card-content__desc">Graduated at PTIT</span>
      </div>
      <div className="card-content">
        <span className="card-content__icon">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <span className="card-content__desc">From Binh Dinh, Vietnam</span>
      </div>
      <div className="card-content">
        <span className="card-content__icon">
          <i className="fa-solid fa-house"></i>
        </span>
        <span className="card-content__desc">Lives in Hanoi, Vietnam</span>
      </div>
      <div className="card-content">
        <ButtonComponent
          size="large"
          text="Edit Info"
          icon={<i className="fa-regular fa-circle-info"></i>}
          block={true}
          style={{
            backgroundColor: "#e9e9e9",
            borderRadius: "6px",
            color: "#000",
            marginTop: "10px",
          }}
        />
      </div>
    </Card>
  );
};

export default CardIntro;
