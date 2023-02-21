import { useState } from "react";
import { useShoppingCart } from "../context/useShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemsProbs = {
  id: number;
  title: string;
  rating: number;
  price: number;
  imgUrl: string;
};

const DrawerMobile = ({ id, title, rating, price, imgUrl }: StoreItemsProbs) => {
  const [isClick, setIsClick] = useState(false);
  const [dataInc, setDataInc] = useState(1);
  const { getItemQuantity, incMobileCartQuantity }: any = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-bottom-example"
        data-drawer-show="drawer-bottom-example"
        data-drawer-placement="bottom"
        aria-controls="drawer-bottom-example"
        onClick={(event) => {
          event.preventDefault();
          setIsClick(!isClick);
        }}
      >
        Add Cart
      </button>
      <div
        id="drawer-bottom-example"
        className={`fixed md:hidden bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-all bg-white dark:bg-gray-800 transform-none duration-500 ease-in-out ${isClick ? "bottom-0" : "-bottom-full"}`}
        tabIndex={-1}
        aria-labelledby="drawer-bottom-label"
      >
        <h5 id="drawer-bottom-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          Rincian Pesanan
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-bottom-example"
          aria-controls="drawer-bottom-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => {
            setIsClick(!isClick);
          }}
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
        <div className="flex  justify-between items-start gap-5 mb-4 border-b-2 pb-2">
          <img src={imgUrl} alt="drawer-img" className="w-28 h-32 object-cover" />
          <div className="flex flex-col gap-2 justify-center items-start mr-44">
            <span>{title}</span>
            <span>{formatCurrency(price)}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Jumlah</span>
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={dataInc} min="1" />
            <button type="submit" className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setDataInc(dataInc + 1)}>
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex w-full h-full justify-center items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            incMobileCartQuantity(id, dataInc);
            setIsClick(!isClick);
          }}
        >
          Konfirmasi{" "}
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default DrawerMobile;
