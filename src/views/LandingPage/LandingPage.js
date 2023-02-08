import React from "react";
import poster1 from "../../assets/img/Food Sale Poster.svg";
import poster2 from "../../assets/img/Food  (Poster).svg";
import banner1 from "../../assets/img/Courier with a watch, a clipboard and a pencil delivers the boxes on time.svg";
import banner2 from "../../assets/img/Delivery girl.svg";
import banner3 from "../../assets/img/Order delivered to destination.svg";
import banner4 from "../../assets/img/lettering special offer comics style.svg";
import gambar1 from "../../assets/img/Rectangle 3.png";
import gambar2 from "../../assets/img/Rectangle 4.png";
import gambar3 from "../../assets/img/Rectangle 5.png";

function LandingPage() {
  return (
    <>
      <div className="flex flex-wrap pb-10">
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 mt-52 pl-16">
          <h1 className="font-normal text-6xl bg-white text-green-20">
            Say No To <span className="block">Food Waste</span>
          </h1>
          <div className="py-3 px-6 bg-green-20 text-white w-fit rounded-3xl mt-6">
            Get Started
          </div>
        </div>
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 -ml-28 flex">
          <img src={poster2} alt="img" className="mt-52 z-5" />
          <img src={poster1} alt="img" className="-mt-52 -ml-28" />
        </div>
      </div>

      <div className="bg-green-20 pt-6 pb-14">
        <h5 className="text-white text-center text-4xl mb-9 font-normal">
          How it works
        </h5>
        <h1 className="text-center text-white text-5xl mb-5 font-bold">
          What We Serve
        </h1>
        <h2 className="text-center text-white text-4xl font-normal">
          Product quality is our priority, And always guarantees safety until it
          your hands
        </h2>
        <div className="mt-28 mx-14 flex flex-row gap-3">
          <div className="block">
            <img src={banner3} alt="img" className="" />
            <h1 className="text-center text-white text-4xl font-bold">
              Easy To Order
            </h1>
            <p className="text-white font-medium text-2xl text-center mt-4">
              You only order through <span className="block">website</span>
            </p>
          </div>
          <div className="block">
            <img src={banner4} alt="img" className="mb-20" />
            <h1 className="text-center text-white text-4xl font-bold">
              Get Special Offer
            </h1>
            <p className="text-white font-medium text-2xl text-center mt-4">
              Get every discount on
              <span className="block">your purchase</span>
            </p>
          </div>
          <div className="block">
            <img src={banner2} alt="img" className="" />
            <h1 className="text-center text-white text-4xl font-bold">
              Free Delivery
            </h1>
            <p className="text-white font-medium text-2xl text-center mt-4">
              Delivery will be on time
            </p>
          </div>
          <div className="block">
            <img src={banner1} alt="img" className="-mb-5" />
            <h1 className="text-center text-white text-4xl font-bold">
              Best Quality
            </h1>
            <p className="text-white font-medium text-2xl text-center mt-4">
              The best quality of food
              <span className="block"> for you </span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-14">
        <h1 className="text-center text-green-20 text-4xl font-normal ">
          Our Features
        </h1>
        <h2 className="text-center text-green-20 text-5xl font-bold mt-5">
          Our Main Features
        </h2>
      </div>

      <div className="flex">
        <div
          className="px-16 py-28 pt-14"
          style={{ backgroundColor: "#EA21FB" }}
        >
          <img src={gambar1} alt="alt" className="mb-11" />
          <h1 className="text-white font-semibold text-5xl text-center">
            Menjadi Pupuk
          </h1>
        </div>
        <div
          className="px-12 pt-14 py-28"
          style={{ backgroundColor: "#3E98C3" }}
        >
          <img src={gambar2} alt="alt" className="mb-11" />
          <h1 className="text-white font-semibold text-5xl text-center">
            Disumbangkan
          </h1>
        </div>
        <div
          className="px-12 pt-14 py-28"
          style={{ backgroundColor: "#FE002A" }}
        >
          <img src={gambar3} alt="alt" className="mb-11" />
          <h1 className="text-white font-semibold text-5xl text-center">
            Order Foods
          </h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
