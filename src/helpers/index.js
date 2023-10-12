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
