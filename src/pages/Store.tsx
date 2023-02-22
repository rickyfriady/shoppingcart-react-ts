import { Key } from "react";
import useFetch from "react-fetch-hook";
import StoreItem from "../components/Storeitem";

const Store = () => {
  const { isLoading, data }: any = useFetch("https://dummyjson.com/products");

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 md:gap-4">
        {data.products.map((items: JSX.IntrinsicAttributes & { id: number; title: string; rating: number; price: number; imgUrl: string; images: string }, key: Key | null | undefined) => {
          return <StoreItem key={key} {...items} imgUrl={items.images[0]} />;
        })}
      </div>
    </div>
  );
};

export default Store;
