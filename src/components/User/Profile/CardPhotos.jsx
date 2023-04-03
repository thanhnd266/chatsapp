import { Card, Image } from "antd";

const CardPhotos = ({ listPhotos, title }) => {
  const cardTitle = (
    <div className="header-more">
      <span>{title}</span>
      <a className="view-more" href="/">
        See All {title}
      </a>
    </div>
  );

  return (
    <Card
      title={cardTitle}
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "#242526",
      }}
    >
      <div className="card-img">
        {listPhotos?.map((photo) => {
          if (!photo.isFriend) {
            return <Image src={photo.image} key={photo.id} />;
          } else {
            return (
              <div className="photo-friend">
                <Image src={photo.image} key={photo.id} />
                <span>{photo.name}</span>
              </div>
            );
          }
        })}
      </div>
    </Card>
  );
};

export default CardPhotos;
