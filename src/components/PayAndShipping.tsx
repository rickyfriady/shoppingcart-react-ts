import Bri from "../assets/image/Bri.png";
import Alfamart from "../assets/image/alfamart.png";
import Alfamidi from "../assets/image/alfamidi.png";
import Bca from "../assets/image/bca.png";
import Bni from "../assets/image/bni.png";
import Bsi from "../assets/image/bsi.png";
import Cmb from "../assets/image/cmib-niaga.png";
import Dandan from "../assets/image/dandan.png";
import Indomart from "../assets/image/indomart.png";
import Jcb from "../assets/image/jcb.png";
import Mandiri from "../assets/image/mandiri.png";
import Mastercard from "../assets/image/mastercard.png";
import Permata from "../assets/image/permata.png";
import Seabank from "../assets/image/seabank.png";

import Gosend from "../assets/image/gosend.png";
import Idexpress from "../assets/image/idexpress.png";
import Indahcargo from "../assets/image/indecargo.png";
import Jne from "../assets/image/jne.png";
import Jntcargo from "../assets/image/jntcargo.png";
import Jntexpress from "../assets/image/jntexpress.png";
import Ninja from "../assets/image/ninjaexpress.png";
import Sicepat from "../assets/image/sicepat.png";

const dataIconPayment = [
  { name: "Seabank", dataIcon: Seabank },
  { name: "Bca", dataIcon: Bca },
  { name: "Bni", dataIcon: Bni },
  { name: "Bri", dataIcon: Bri },
  { name: "Bsi", dataIcon: Bsi },
  { name: "Cimb-niaga", dataIcon: Cmb },
  { name: "Mandiri", dataIcon: Mandiri },
  { name: "Permata", dataIcon: Permata },
  { name: "Alfamart", dataIcon: Alfamart },
  { name: "Alfamidi", dataIcon: Alfamidi },
  { name: "Indomart", dataIcon: Indomart },
  { name: "Dandan", dataIcon: Dandan },
  { name: "Jcb", dataIcon: Jcb },
  { name: "Mastercard", dataIcon: Mastercard },
];

const dataIconShipping = [
  { name: "Jne", dataIcon: Jne },
  { name: "Jntexpress", dataIcon: Jntexpress },
  { name: "Jntcargo", dataIcon: Jntcargo },
  { name: "Sicepat", dataIcon: Sicepat },
  { name: "Ninja", dataIcon: Ninja },
  { name: "Gosend", dataIcon: Gosend },
  { name: "Idexpress", dataIcon: Idexpress },
  { name: "Indahcargo", dataIcon: Indahcargo },
];

const PayAndShipping = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row justify-between gap-4 my-4">
      <div className="w-full md:w-1/2">
        <h1 className="text-lg md:text-xl font-sans">Metode Pembayaran</h1>
        <ul className=" bg-white h-full p-3 mt-2 grid grid-cols-4 gap-2 justify-items-center">
          {dataIconPayment.map((item) => (
            <li>
              <img src={item.dataIcon} alt={`icon-${item.name}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-lg md:text-xl font-sans text-left">Jasa Pengiriman</h1>
        <ul className=" bg-white h-full p-3 mt-2 grid grid-cols-4 gap-2 justify-items-center">
          {dataIconShipping.map((item) => (
            <li>
              <img src={item.dataIcon} alt={`icon-${item.name}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PayAndShipping;
