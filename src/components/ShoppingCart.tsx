import { useShoppingCart } from '../context/useShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';
import CartItem from './CartItem';

type ShoppingCartProbs = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProbs) => {
  const { closeCart, cartItems }: any = useShoppingCart();

  const subTotal = cartItems.reduce((total: number, cartItem: { id: number; quantity: number }) => {
    const items = storeItems.find((data) => data.id === cartItem.id);
    return total + (items?.price || 0) * cartItem.quantity;
  }, 0);
  const taxCost = (subTotal * 10) / 100;
  const totalCost = subTotal + taxCost;

  return (
    <div>
      <div
        id="drawer-right-example"
        className={`fixed top-0  z-50 w-screen h-screen p-4 overflow-y-auto translate-x-full bg-white  md:w-1/3 dark:bg-gray-800 transform-none ${isOpen ? 'right-0' : '-right-full'} duration-500 transition-all`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        {/* head drawer */}
        <div className={`fixed top-0 w-screen md:w-1/3 overflow-hidden ${isOpen ? 'right-0' : '-right-full'} duration-500 transition-all  box-border`}>
          <div className="flex justify-between px-2 xl:px-4 bg-white py-3 items-center ">
            <h5 id="drawer-right-label" className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              cart
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeCart}
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
        </div>

        {/* body drawer */}
        <div className="h-screen bg-gray-100 pt-3 mt-10">
          <div className="mx-auto max-w-5xl justify-center px-6 md:block  xl:px-2 overflow-y-auto">
            <div className="rounded-lg ">
              {cartItems.map((item: JSX.IntrinsicAttributes & { id: number; quantity: number }) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-2">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{formatCurrency(subTotal)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Tax</p>
                <p className="text-gray-700">{formatCurrency(taxCost)}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{formatCurrency(totalCost)}</p>
                  <p className="text-sm text-gray-700">including Tax 10%</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
