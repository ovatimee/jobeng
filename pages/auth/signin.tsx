import React, { ContextType, useState } from "react";
import { getProviders, signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Icon from "../../utils/icon";
import { UserIcon } from "@heroicons/react/24/solid";

interface Provider {
  name: string;
  id: string;
}

interface Props {
  providers: Provider[];
}

const SignIn: React.FC<Props> = ({ providers }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { data: session, status } = useSession();

  function handleChange(e: React.ChangeEvent) {
    const { name, value } = e.target as HTMLInputElement;
    setCredentials((p) => ({ ...p, [name]: value }));
  }

  console.log(credentials)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <span className="w-32 mx-auto">Jobeng</span>
            <button onClick={() => signOut()}>Signout</button>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Join JobEng</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center space-y-3">
                {providers &&
                  Object.values(providers).map((provider) =>
                    provider.name !== "Credentials" ? (
                      <button
                        key={provider.name}
                        onClick={() =>
                          signIn(provider.id, { callbackUrl: "http://localhost:3000/" })
                        }
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                      >
                        <div className="bg-white p-2 rounded-full">
                          <Icon name={provider.name.toLowerCase()} />
                        </div>
                        <span className="ml-4">Sign in with {provider.name}</span>
                      </button>
                    ) : (
                      <div key={provider.name} className="my-12 border-b text-center">
                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                          Or sign in with e-mail
                        </div>
                      </div>
                    )
                  )}
              </div>
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={credentials.name}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                <button
                  onClick={() => signIn("credentials", {})}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <UserIcon className="w-6" />
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by jobeng's
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  // console.log(providers)

  return {
    props: { providers },
  };
};

export default SignIn;
