import image1 from '@/assets/images/1.png';
import image2 from '@/assets/images/2.png';
import image3 from '@/assets/images/3.png';
import image4 from '@/assets/images/4.png';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { BiMessageRounded, BiSupport } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDown, setDown] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleDropDown = () => {
    setDown(!isDown);
  };
  return (
    <nav>
      <div className="hidden md:flex h-[36px] w-full bg-subsidery  ">
        <div className="container px-[100px]">
          <div className=" flex  h-[36px] justify-between">
            <div className="flex h-[36px] justify-center items-center">
              {' '}
              <Image
                className="h-[36px] w-[58px] mx-2"
                src={image1}
                alt="logo"
              />
              <Image
                className="h-[36px] w-[58px]  mx-2"
                src={image2}
                alt="logo"
              />
              <Image
                className="h-[36px] w-[58px]  mx-2"
                src={image3}
                alt="logo"
              />
              <Image
                className="h-[36px] w-[58px]  mx-2"
                src={image4}
                alt="logo"
              />
            </div>
            <div className="h-[36px] flex  justify-center ">
              <div className="flex justify-center items-center h-[36px] text-base text-sm mx-5">
                <BiSupport></BiSupport> <span> 24/7 Lifetime Support</span>
              </div>
              <div className="flex justify-center items-center h-[36px]  text-base text-sm  mx-5">
                <BiMessageRounded></BiMessageRounded> <span> Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px]  bg-secondary  ">
        <div className="md:container px-5 md:px-[100px] flex items-center justify-between">
          <div class="flex justify-between items-center">
            <Image className=" w-[180px]  " src={logo} alt="logo" />
          </div>

          <div class="hidden md:flex space-x-4">
            <a href="#" class="text-white">
              Home
            </a>

            <div class="relative">
              <button class="text-white" onClick={handleDropDown}>
                Category
              </button>
              {isDown && (
                <ul class="absolute w-[400px] top-[45px] right-0 bg-secondary p-2 z-10">
                  <li>
                    <a href="#" class="text-white">
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Item 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Item 3
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#" class="text-white">
              Contact
            </a>
          </div>

          <div class="md:hidden">
            <button class="text-white" onClick={handleMobileMenuToggle}>
              <FaBars />
            </button>
            {isMobileMenuOpen && (
              <div class="absolute top-[56px] right-0 bg-secondary w-full p-2">
                <a href="#" class="text-white block">
                  Home
                </a>
                <a href="#" class="text-white block">
                  About
                </a>
                <a href="#" class="text-white block">
                  Services
                </a>
                <a href="#" class="text-white block">
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
