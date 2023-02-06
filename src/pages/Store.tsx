import StoreItem from "../components/Storeitem";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <StoreItem id={1} name="ricki" price={300} imgUrl="data" />
    </div>
  );
};

export default Store;
