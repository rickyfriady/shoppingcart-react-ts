import VideoHome from '../assets/video/ecommers-video.mp4';
import CountDown from '../components/CountDown';
import FuturedItems from '../components/FuturedItems';
import PayAndShipping from '../components/PayAndShipping';

const Home = () => {
  return (
    <div>
      <section className="relative mt-6 ">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop>
          <source src={VideoHome} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/40 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-center">
          <div className="max-w-max text-center sm:text-left">
            <h1 className="text-xl font-extrabold sm:text-5xl">Let us find your</h1>
            <span className="text-8xl ">
              <strong className="block font-extrabold text-rose-700">Favorite Brand.</strong>
            </span>
          </div>
        </div>
      </section>
      <FuturedItems />
      <PayAndShipping />
    </div>
  );
};

export default Home;
