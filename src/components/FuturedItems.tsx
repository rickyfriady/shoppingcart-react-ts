import useFetch from 'react-fetch-hook';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CardFutured from './CardFutured';

type FuturedItemProbs = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const FuturedItems = () => {
  const settings: any = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const { isLoading, data }: any = useFetch('https://fakestoreapi.com/products?limit=12');
  if (isLoading) return <div>Loading</div>;

  return (
    <section className="container mt-6">
      <div className="w-full block">
        <h1 className="text-xl font-sans">Promo Hari ini</h1>
        <Slider {...settings}>
          <div className="invisible cursor-pointer relative mx-auto transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img className="h-36 w-full object-cover object-center" src="" alt={`Product-image`} />
            <div className="p-4">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="relative p-2 bg-red-600 text-xs font-normal text-blue-100 text-center  leading-none rounded-full" style={{ width: '100%' }}>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Terjual</span>
                </div>
              </div>
              <p className="pt-2 text-xs dark:text-gray-300 text-gray-700">Lagi diminati</p>
              <div className="flex items-center">
                <p className="mr-2 text-base font-semibold text-gray-900 dark:text-white">44</p>
                <p className="text-xs  font-medium text-gray-500 line-through dark:text-gray-300">444</p>
                <p className="absolute top-3 right-4 text-xs font-medium text-red-500 bg-red-200 rounded-md p-2">20% off</p>
              </div>
            </div>
          </div>
          {data.map((items: JSX.IntrinsicAttributes & { id: number; title: string; price: number; image: string }) => (
            <CardFutured key={items.id} {...items} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FuturedItems;
