"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";

import React, { useEffect } from "react";
const Provider = ({ children }: { children: React.ReactNode }) => {
  // This component is used to create a user in the database when the user signs up.
  const { user } = useUser();
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
      console.log(result);
    }
  };

  return <div>{children}</div>;
};
export default Provider;
