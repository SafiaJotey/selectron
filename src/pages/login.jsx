import { signIn } from 'next-auth/react';

import Head from 'next/head';
import { AiOutlineGithub, AiOutlineGooglePlus } from 'react-icons/ai';
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>

      <div className=" flex justify-center h-72 items-center">
        <div className="bg-secondary p-[50px] text-white rounded-md ">
          <h3 className="text-2xl font-bold text-center">LOGIN</h3>
          <hr />
          <div className="flex justify-center items-center my-2">
            <AiOutlineGooglePlus
              className="text-6xl m-3 cursor-pointer"
              onClick={() =>
                signIn('google', {
                  callbackUrl: 'https://selectron.vercel.app',
                })
              }
            />
            <AiOutlineGithub
              className="text-6xl  m-3 cursor-pointer"
              onClick={() =>
                signIn('github', {
                  callbackUrl: 'https://selectron.vercel.app',
                })
              }
            />
          </div>
        </div>

        {/* <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
        
        </form> */}
        {/* <Button>Login</Button> */}
      </div>
    </div>
  );
};

export default LoginPage;

// LoginPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
