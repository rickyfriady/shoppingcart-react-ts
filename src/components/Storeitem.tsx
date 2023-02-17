import Card from "./Card";

type StoreItemsProbs = {
  id: number;
  title: string;
  rating: number;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, title, rating, price, imgUrl }: StoreItemsProbs) {
  return <Card id={id} title={title} rating={rating} price={price} imgUrl={imgUrl} />;
}
