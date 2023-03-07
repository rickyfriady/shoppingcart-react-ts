import useFetch from 'react-fetch-hook';
import { useShoppingCart } from '../context/useShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProbs = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProbs) => {
  const { isLoading, data }: any = useFetch('https://dummyjson.com/products');

  if (isLoading) return <div>Loading</div>;

  const { increaseCartQuantity, decreaseCartQuantity }: any = useShoppingCart();

  const { removeFromCart }: any = useShoppingCart();
  const items = data.products.find((data: any) => data.id === id);
  if (items == null) return null;
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex flex-col ">
      <div className="flex justify-between sm:justify-start gap-2 sm:gap-4 items-start">
        <div className="h-1/2 w-1/2 max-h-28 max-w-fit aspect-square">
          <img src={items.images[0]} loading="lazy" alt="product-image" className="w-full h-full object-cover rounded-lg sm:w-40" />
        </div>
        <div className="mt-1 sm:mt-0 flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">{items.title}</h2>
          <p className="mt-1 text-xs text-gray-700">
            {formatCurrency(items.price)} x {quantity} items
          </p>
        </div>
        <button
          type="button"
          className=" h-full mt-2 sm:mt-0"
          onClick={() => {
            removeFromCart(items.id);
          }}
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mt-4 sm:mt-0 flex justify-between sm:justify-end items-center gap-2 ">
        <div>
          <span className="text-lg">{formatCurrency(items.price * quantity)}</span>
        </div>
        <div className="flex items-center border-gray-100">
          <button
            type="button"
            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            onClick={() => {
              decreaseCartQuantity(id);
            }}
          >
            -
          </button>
          <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} min="1" />
          <button
            type="button"
            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
