import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const CarListData = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div class="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          similique incidunt debitis..
        </p>
        {/* listing cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarListData.map(({ name, price, image, aosDelay }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-7 group-hover:sm:translate-x-16 duration-700"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>₹{price}/day</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    12kms
                  </p>
                </div>
              );
            })}
          </div>
          {/* end of listing */}
          <div className="grid place-content-center mt-8">
            <button data-aos="fade-up" className="button-outline">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
