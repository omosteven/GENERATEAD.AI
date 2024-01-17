import { useLayoutEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export const supabase = createClient(
  // process.env.NEXT_PUBLIC_SUPABASE_URL,
  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  "https://msbwffwlrxjkyhcnfpbd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zYndmZndscnhqa3loY25mcGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwODA5MTYsImV4cCI6MjAwNDY1NjkxNn0.5qobgdc0G_5B0CqOp5UAhBJmUsu8xsgGZjoYmaHmkqk"
);
export const signInWithEmail = async (email, password) => {
  // const { data, error } =
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
};
export const signUpWithEmail = async (email, password) => {
  // const { data, error } =
  return await supabase.auth.signUp({
    email: email,
    password: password,
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

/**
 *
 * @param { import("axios").AxiosError } errorObject
 */

const returnValue = (errorMessage) => {
  return { isError: true, errorMessage };
};

export const parseError = (errorObject) => {
  const { request, response, message } = errorObject;

  if (response) {
    if (response?.data) {
      const {
        data: { message },
      } = response;

      return returnValue(message);
    }

    return returnValue(response.statusText);
  } else if (request) {
    const statusCodeForNoInternet = 0;

    const { status, statusText: errorMessage } = request;

    if (status === statusCodeForNoInternet) {
      return returnValue(
        "Seems you are not connected to the internet, refresh your browser"
      );
    }

    return returnValue(errorMessage);
  } else {
    return returnValue(message);
  }

  // return "Error Occured";
};

export const extractURLFromString = (inputString) => {
  const urlRegex = /(https?:\/\/[^\s]+")/;

  // Find matches in the input string
  const matches = inputString.match(urlRegex);

  // Return the first match (if any)
  const length = matches[0]?.length;
  return matches ? matches[0]?.slice?.(0, length - 1) : null;
};
