import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from 'react-icons/bi';

export default function Footer() {
  return (
    <footer class="">
      <div className="bg-secondary text-white  p-10">
        <div class="container mx-auto py-8 px-4 lg:px-8">
          <Image className=" w-[200px]  " src={logo} alt="logo" />
          <div className="mb-5">
            <h4 className="text-xl font-semibold">
              WHY BUY FROM SELECTRON PC?
            </h4>
            <p className="text-base text-sm">
              If you’re searching for the cheapest Gaming PC made with inferior
              products and questionable quality, you might as well leave now.
              ORIGIN PC only uses the highest quality performance Gaming PC
              components available. Every single{' '}
              <span className="text-primary">customized Gaming PC </span>and{' '}
              <span className="text-primary ">Gaming Laptop</span> is assembled
              right here in the United States by highly trained and incredibly
              skilled technicians and assembly engineers. Sure, we can assemble
              our award-winning Gaming PCs overseas for less. In fact, that’s
              what most of our competitors do. However, we choose to assemble
              all our Gaming PCs right here in the United States because it
              gives us the best control over manufacturing, performance, and
              overall quality. And we’re thrilled to hire only the best PC
              Builders in the country.
            </p>
          </div>
          <hr className="text-subsidery mt-5 mb-10" />
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <h2 class="text-xl  font-bold mb-4">ABOUT US</h2>
              <p class="text-sm text-justify text-base  text-sm">
                Welcome to our PC Builder website! Design your dream computer
                with ease using our intuitive tool and extensive selection of
                components. Create a personalized powerhouse that suits your
                needs and preferences perfectly.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold mb-4">CONTACT</h2>
              <p class="text-sm text-base ">
                Address: House# 74, Road# 127, Gulshan Avenue, Dhaka, Bangladesh
              </p>
              <p class="text-sm text-base">Phone: (+880) 1777777777</p>
              <p class="text-sm text-base">Email: selectron.info@gmail.com</p>
            </div>

            <div>
              <h2 class="text-xl font-bold mb-4">PRODUCTS</h2>
              <ul class="text-sm">
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Gaming PCs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Gaming Laptops
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Workstation
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Desktops
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    4K Uncapped
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">COMMUNITY</h2>
              <ul class="text-sm">
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    SELECTRONPCFAMILY
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Twitch Prime
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-400  text-sm">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold mb-4">NEWSLETTER</h2>
              <p className="text-base  text-sm">
                Get access to exclusive offers!
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your email"
                  className="border w-full p-2 rounded-sm  bg-secondary  border-primary my-1"
                />{' '}
                <button className="w-full py-2 my-1 bg-primary text-white">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-subsidery text-white">
        <div className="md:container md:px-[100px] py-5">
          <div className="flex flex-row justify-around text-base items-center ">
            <div className=" w-1/3 flex justify-center items-center my-1 ">
              <BiLogoFacebookCircle className="text-3xl md:mx-2"></BiLogoFacebookCircle>
              <BiLogoTwitter className="text-3xl  md:mx-2"></BiLogoTwitter>
              <BiLogoLinkedinSquare className="text-3xl  md:mx-2"></BiLogoLinkedinSquare>
              <BiLogoInstagramAlt className="text-3xl  md:mx-2"></BiLogoInstagramAlt>
            </div>
            <div className=" w-1/3 flex justify-center  my-1">
              {' '}
              <Image
                className=" w-[100px] md:w-[140px]  "
                src={logo}
                alt="logo"
              />
            </div>

            <div className=" w-1/3  my-1">
              <p className="text-xs p-1 md:p-0 md:text-sm">
                © 2023 SELECTRON PC Corporation. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
