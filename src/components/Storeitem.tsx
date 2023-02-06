import Card from "./Card";

type StoreItemsProbs = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, name, price, imgUrl }: StoreItemsProbs) {
  return <Card />;
}
