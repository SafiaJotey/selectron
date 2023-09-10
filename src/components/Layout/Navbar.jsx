import image1 from '@/assets/images/1.png';
import image2 from '@/assets/images/2.png';
import image3 from '@/assets/images/3.png';
import image4 from '@/assets/images/4.png';
import logo from '@/assets/images/logo.png';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BiMessageRounded, BiSupport } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';
export default function Navbar() {
  const { data: session } = useSession();

  const rouuter = useRouter();
  const [isDown, setDown] = useState(false);
  const categories = useSelector((state) => state?.categories?.categories);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const dropdownRef = useRef(null); // Ref for the dropdown menu
  const handleDropDown = () => {
    setDown(!isDown);
    console.log('Dropdown isDown:', isDown);
  };
  const handleRoute = (category) => {
    rouuter.replace(`/category/${category?.category}`);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDown(false);
    }
  };

  // Attach the click event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="hidden md:flex h-[36px] w-full bg-subsidery  ">
        <div className="container px-[100px]">
          <div className=" flex  h-[36px] justify-between items-center">
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
            <div className="h-[36px] flex  justify-center items-center">
              <div className="flex justify-center items-center h-[36px] text-baseColor text-sm mx-5">
                <BiSupport className="mx-2"></BiSupport>{' '}
                <span> 24/7 Lifetime Support</span>
              </div>
              <div className="flex justify-center items-center h-[36px]  text-baseColor text-sm  mx-5">
                <BiMessageRounded className="mx-2"></BiMessageRounded>{' '}
                <span> Contact</span>
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

          <div class="hidden md:flex md:a-center space-x-4">
            <Link href="/" class="text-white">
              Home
            </Link>
            <Link href="/allProducts" class="text-white">
              All Products
            </Link>

            <div class="relative" ref={dropdownRef}>
              <button class="text-white" onClick={handleDropDown}>
                Category
              </button>
              {isDown && (
                <div>
                  <ul class="absolute w-[150px] top-[49px] left-0 bg-secondary p-2 z-10">
                    {categories?.map((category) => {
                      return (
                        <li
                          key={category}
                          className="p-2 cursor-pointer bg-secondary hover:bg-subsidery"
                          onClick={() => handleRoute(category)}
                        >
                          <a class="text-white">{category?.category}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <Link href="/build" class="text-white">
              <Button>Build PC</Button>
            </Link>
            <div className="flex justify-center items-center">
              {session?.user ? (
                <p className="text-white">
                  <button
                    onClick={() => signOut()}
                    type="primary"
                    danger
                    className="bg-transparent border border-primary py-1 px-5 text-white rounded-sm "
                  >
                    Logout
                  </button>
                </p>
              ) : (
                <Link
                  className="bg-transparent border border-primary py-1 px-6 text-white rounded-sm "
                  href="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <div class="md:hidden relative ">
            <button class="text-white" onClick={handleMobileMenuToggle}>
              <FaBars />
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-[44px] right-0 bg-secondary  w-56  p-2 z-10 ">
                <div>
                  <Link href="/" className="text-white block  my-2">
                    Home
                  </Link>
                  <Link href="/allProducts" class="text-white">
                    All Products
                  </Link>
                  <div class="relative my-2" ref={dropdownRef}>
                    <button class="text-white" onClick={handleDropDown}>
                      Category
                    </button>
                    {isDown && (
                      <ul class=" w-[150px] top-[49px] right-0 bg-secondary p-2 ">
                        {categories?.map((category) => {
                          return (
                            <li
                              key={category}
                              className="p-2 cursor-pointer bg-secondary hover:bg-subsidery"
                              onClick={() => handleRoute(category)}
                            >
                              <a class="text-white">{category?.category}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="flex justify-start items-center my-2">
                    <Link href="/build" className="text-white">
                      <Button>Build PC</Button>
                    </Link>
                    {session?.user ? (
                      <p className="text-white ">
                        <button
                          onClick={() => signOut()}
                          type="primary"
                          danger
                          className="bg-transparent border border-primary py-1 px-5 text-white rounded-sm mx-1"
                        >
                          Logout
                        </button>
                      </p>
                    ) : (
                      <Link
                        className="bg-transparent border border-primary py-1 px-6 text-white rounded-sm mx-1 "
                        href="/login"
                      >
                        <button> Login</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
