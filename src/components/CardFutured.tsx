import { formatCurrency } from '../utilities/formatCurrency';
import { randomSoldUnit } from '../utilities/randomSoldUnit';

type FuturedItemProbs = {
  title: string;
  price: number;
  image: string;
};

const CardFutured = ({ title, price, image }: FuturedItemProbs) => {
  return (
    <div className="relative cursor-pointer mx-auto transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img className="h-36 w-full object-cover object-center" src={image} alt={`Product-image-${title}`} />
      <div className="p-4">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="relative p-2 bg-red-600 text-xs font-normal text-blue-100 text-center  leading-none rounded-full" style={{ width: '100%' }}>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{randomSoldUnit()} Terjual</span>
          </div>
        </div>
        <p className="pt-2 text-xs dark:text-gray-300 text-gray-700">Lagi diminati</p>
        <div className="flex items-center">
          <p className="mr-2 text-base font-semibold text-gray-900 dark:text-white">{formatCurrency(price)}</p>
          <p className="text-xs  font-medium text-gray-500 line-through dark:text-gray-300">{formatCurrency((price * 20) / 100)}</p>
          <p className="absolute top-3 right-4 text-xs font-medium text-red-500 bg-red-200 rounded-md p-2">20% off</p>
        </div>
      </div>
    </div>
  );
};

export default CardFutured;
