import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-4 py-12 grid md:grid-cols-3">
      <div className="rounded-xl relative mx-11 mb-4">
        <div className="absolute w-96 h-full  bg-black/50  text-white">
          <p className="font-bold text-2xl px-2 pt-4">Burger Farm</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-9">
            Order Now
          </button>
        </div>
        <img
          className="w-96"
          src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="rounded-xl relative mx-11 mb-4">
        <div className="absolute w-96 h-full   bg-black/50  text-white">
          <p className="font-bold text-2xl px-2 pt-4">chineese</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-9">
            Order Now
          </button>
        </div>
        <img
          className="w-96"
          src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>

      <div className="rounded-xl relative mx-11 mb-4">
        <div className="absolute w-96 h-full bg-black/50   text-white">
          <p className="font-bold text-2xl px-2 pt-4">Pizza Farm</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-9">
            Order Now
          </button>
        </div>
        <img
          className="w-96"
          src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
