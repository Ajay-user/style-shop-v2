import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Directory = () => (
  <div className="directory">
    {categories.map((item) => (
      <div className="category-item" key={item.id}>
        <div
          className="category-item__background-img"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
        <div className="category-item__title-box">
          <h1 className="category-item__title--main">{item.title}</h1>
          <p className="category-item__title--sub">Shop Now !</p>
        </div>
      </div>
    ))}
  </div>
);

export default Directory;
