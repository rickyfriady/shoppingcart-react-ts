import StoreItem from "../components/Storeitem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 md:gap-4">
        {storeItems.map((items) => (
          <StoreItem {...items} />
        ))}
      </div>
    </div>
  );
};

export default Store;
