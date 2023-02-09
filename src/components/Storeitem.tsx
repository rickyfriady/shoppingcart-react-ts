import Card from "./Card";

type StoreItemsProbs = {
  id: number;
  name: string;
  rating: number;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, name, rating, price, imgUrl }: StoreItemsProbs) {
  return <Card id={id} name={name} rating={rating} price={price} imgUrl={imgUrl} />;
}
