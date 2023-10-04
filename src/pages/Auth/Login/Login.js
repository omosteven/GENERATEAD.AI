import { useState } from "react";
import { signInWithEmail } from "../../../helpers";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../Auth.scss";
import image from "../../../assets/auth/img_4-removebg-preview.png";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [spin, setSpin] = useState(false);

  const { register, handleSubmit } = useForm();

  // const main = async () => {
  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   console.log("This is updates");
  //   console.log(user);
  //   if (user) {
  //     console.log({user})
  //     // setUser(true);
  //     // window.location.replace("/dashboard");
  //   } else {
  //     // setUser(false);
  //   }
  // };
  // useEffect(()=>{
  //   if(user)

  // },[user])

  const signUp = async (payload) => {
    // "use server";

    setSpin(true);
    setSuccess("");
    setError("");

    const { email, password } = payload || {};

    const { data, error } = await signInWithEmail(email, password);

    if (error) {
      setError(error.message);
      setSpin(false);
      return;
    }

    console.log({ data });

    setSuccess("Login successful. Redirecting...");
    // router.push("/dashboard");
    window.location.replace("/main/dashboard");

    // Login SUccessful
  };

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <>
      <div className="text-white  bg-black auth">
        <div className="auth__layout">
          {/* md:w-1/2 mx-20 */}
          <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
            <div className="flex flex-col">
              <div className="py-10 flex flex-col">
                <h3>Welcome Back 👋</h3>
                <p>
                  Experience Seamless Marketing Mastery: Empowering Your
                  Business Growth Through Our Intuitive Markerting Platform
                </p>
              </div>
              <div>
                {spin ? (
                  <>
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </>
                ) : null}
              </div>
              {error ? (
                <>
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <span class="font-medium">opps!</span> {error}
                  </div>
                </>
              ) : null}

              {success ? (
                <>
                  <div
                    class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <span class="font-medium">Success </span> {success}
                  </div>
                </>
              ) : null}

              <div>
                <div class="mb-6">
                  <label for="default-input">Email Address</label>
                  <input
                    type="text"
                    placeholder="@ Email Address"
                    register={register}
                    name="email"
                    id="default-input"
                    class="bg-gray-800 border border-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="default-input">Password</label>
                  <input
                    type="password"
                    name="password"
                    register={register}
                    placeholder="Password (min. 8 Characters"
                    id="default-input"
                    class="bg-gray-800 border border-gray-900 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                    required
                  />
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      // required
                    />
                  </div>
                  <label
                    for="terms"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  // onClick={(e) => signUp()}
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-24 py-2.5 text-center mr-2 mb-2"
                >
                  Sign In
                </button>

                <div className="flex flex-col">
                  <div className="auth__actions">
                    <span>Don't have an account?</span>
                    <Link
                      to="/get-started"
                      className="w-auto underline hover:text-blue-500 "
                    >
                      Create a free one
                    </Link>
                    {/* <button
                        type="button"
                        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                      >
                        <svg
                          class="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 19"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Sign in with Google
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="auth__image">
            <img src={image} alt="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
