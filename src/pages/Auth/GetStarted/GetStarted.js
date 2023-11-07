import { useState } from "react";
import { parseError } from "../../../helpers";
import { Link } from "react-router-dom";
import "../Auth.scss";
import image from "../../../assets/auth/img_4-removebg-preview.png";
import { useForm } from "react-hook-form";
import Spinner from "../../../components/ui/Spinner/Spinner";

import AuthError from "../common/AuthError/AuthError";
import axios from "axios";
import toastMessage from "../../../utils/toast";

const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm();

  const [success, setSuccess] = useState(false);

  const signUpUser = async (data) => {
    const url = "http://3.132.215.79/api/v1/register";

    try {
      setLoading(true);
      setErrorMessage("");
      setSuccess("");

      await axios({
        method: "POST",
        url,
        data,
        timeout: 120000,
      });

      setSuccess(true);
      setErrorMessage("");
    } catch (error) {
      const { errorMessage: errorMssg } = parseError(error);
      setErrorMessage(errorMssg);
      setLoading(false);
      setSuccess("");
      toastMessage(errorMssg, true);
    }
  };

  const onSubmit = (data) => {
    const { password, cpassword } = data;
    if (password === cpassword) {
      signUpUser(data);
    } else {
      setErrorMessage("Passwords do not match");
      toastMessage("Passwords do not match", true);
    }
  };

  return (
    <>
      <div className=" text-white bg-black auth">
        <div className="auth__layout">
          {/* {success} */}
          <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
            <div className="flex flex-col">
              <div className="py-4 flex flex-col">
                <h3>Welcome 👋</h3>
                <p>
                  Join our community of brands & advertisers, and embark on a
                  journey to unlock your full marketing potential through the
                  art of expertly crafted, results-driven content.
                </p>
              </div>

              {Boolean(errorMessage) && (
                <AuthError errorMessage={errorMessage} />
              )}

              {success ? (
                <div
                  class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  Thanks for signing up on our waitlist!
                  <br />
                  <br />
                  We are still in the development phase but to stay updated with
                  our progress, insights, and connect with fellow enthusiats,
                  please follow us on{" "}
                  <a
                    href="https://lnkd.in/gvTHdRXQ"
                    className="linkedin-url"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  or join our thriving online community on Discord.
                </div>
              ) : (
                <div>
                  <div class="mb-6">
                    <label for="default-input">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register?.("firstName", { required: true })}
                      name="firstName"
                      class="bg-gray-800 border border-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label for="default-input">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register?.("lastName", { required: true })}
                      name="lastName"
                      class="bg-gray-800 border border-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label for="default-input">Email Address</label>
                    <input
                      type="email"
                      placeholder="@ Email Address"
                      {...register?.("email", { required: true })}
                      name="email"
                      class="bg-gray-800 border border-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label for="default-input">Password</label>
                    <input
                      type="password"
                      {...register?.("password", { required: true })}
                      placeholder="Password (min. 6 Characters)"
                      name="password"
                      minLength={6}
                      class="bg-gray-800 border border-gray-900 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label for="default-input">Confirm Password</label>
                    <input
                      type="password"
                      {...register?.("cpassword", { required: true })}
                      name="cpassword"
                      minLength={6}
                      placeholder="Password (min. 6 Characters)"
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
                        required
                      />
                    </div>
                    <label for="terms" class="ml-2">
                      Accept Terms and Conditions
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-24 py-2.5 text-center mr-2 mb-2"
                  >
                    {loading ? <Spinner /> : "Sign Up"}
                  </button>

                  <div className="flex flex-col" style={{ display: "none" }}>
                    <div className="auth__actions">
                      <span>Or</span>
                      <Link
                        to={"/login"}
                        className="w-auto underline hover:text-blue-500 "
                      >
                        Already have account? Login
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
                        Sign Up in with Google
                      </button> */}
                    </div>
                  </div>
                </div>
              )}
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
export default GetStarted;
