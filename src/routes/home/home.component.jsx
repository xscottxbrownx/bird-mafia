import Directory from "../../components/directory/directory.component";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "stickers",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "paper",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "towels",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "accessories",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "apparel",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]  

  return (
    <Directory categories={categories} />
  );
};

export default Home;