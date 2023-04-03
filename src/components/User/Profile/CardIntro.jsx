import { Card } from "antd";

const CardIntro = () => {
  return (
    <Card
      title="Intro"
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "#242526",
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
    </Card>
  );
};

export default CardIntro;
