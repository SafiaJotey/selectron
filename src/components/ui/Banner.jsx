/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Button from './Button';

const Banner = () => {
  const slides = [
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover1 h-[510px] ">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2">
                  {' '}
                  BACK TO SCHOOL GAMING PCS{' '}
                </span>{' '}
                <br />
                <p className="my-3">
                  Start your school year strong with a custom, high performance
                  Laptop or Desktop.
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover2 h-[510px]">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2">
                  {' '}
                  LEGENDARY ITEMS IN STOCK NOW
                </span>{' '}
                <br />
                <p className="my-3">
                  Rare Drops Like This Are Hard To Find. Intel Core i9 13900KS +
                  NVIDIA RTX 4090 Founders Edition
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover3 h-[510px]">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2">
                  {' '}
                  BEYOND PERFORMANCE.
                </span>{' '}
                <br />
                <p className="my-3">
                  New Intel® Core™ i9-13900KS Desktop Processors available now
                  at ORIGIN PC.
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover4 h-[510px]">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2">
                  {' '}
                  PORTABLE AND POWERFUL
                </span>{' '}
                <br />
                <p className="my-3">
                  New EON14-S and NS-14 Laptops Available Now
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover5 h-[510px]">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2"> THIN TO WIN</span>{' '}
                <br />
                <p className="my-3">
                  Introducing the EON16-SL and NSL-16 laptops. Our thinnest ever
                  NVIDIA RTX 40 Series laptop.
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center bg-no-repeat bg-center bg-cover bg-cover6 h-[510px]">
          <div className="md:w-1/2 ">
            <div className="p-2 md:px-28  text-start  text-white ">
              <h1 className="  font-semibold text-start md:text-start  text-xl md:text-2xl py-2">
                <span className="text-primary text-4xl my-2">
                  {' '}
                  FASTEST GAMING PROCESSOR FOR ELITE GAMERS
                </span>{' '}
                <br />
                <p className="my-3">
                  Customize your ORIGIN PC with a new AMD Ryzen 7000 Series X3D
                  processor.
                </p>
              </h1>

              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Only re-run the effect when currentIndex changes

  return (
    <div className=" relative group ">
      <div className="w-full h-full rounded-2xl bg-center bg-cover  duration-500">
        {slides[currentIndex].url}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl md:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl md:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-xl transition-opacity duration-500  md:text-2xl cursor-pointer ${
              currentIndex === slideIndex ? 'text-primary' : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
