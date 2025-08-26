"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { createContext, useContext } from "react";

interface UserDetails {
  email: string;
  imageUrl: string;
  name: string;
}

export const UserDetailContext = createContext<{
  userDetails: UserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
} | null>(null);

import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  // This component is used to create a user in the database when the user signs up.
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  useEffect(() => {
    CreateNewUser();
  }, [user]);

  const CreateUser = useMutation(api.users.createUser);
  const CreateNewUser = async () => {
    if (user) {
      const result = await CreateUser({
        email: user.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user.imageUrl ?? "",
        name: user.fullName ?? "",
      });
      console.log("user Created " + result);
      setUserDetails(result);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
};
export default Provider;

export const useUserDetailContext = () => {
  return useContext(UserDetailContext);
};
