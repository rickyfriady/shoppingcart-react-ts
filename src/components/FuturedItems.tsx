import useFetch from "react-fetch-hook";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardFutured from "./CardFutured";

type FuturedItemProbs = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const FuturedItems = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const { isLoading, data }: any = useFetch("https://fakestoreapi.com/products?limit=12");
  if (isLoading) return <div>Loading</div>;

  return (
    <section className="container mt-6">
      <div className="w-full block bg-slate-400">
        <h1>futuredSection</h1>
        <Slider {...settings} className="">
          {data.map((items: JSX.IntrinsicAttributes & { id: number; title: string; price: number; image: string }) => (
            <CardFutured key={items.id} {...items} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FuturedItems;
