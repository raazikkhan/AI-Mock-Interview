"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import EmptyState from "./EmptyState";

const Dashboard = () => {
  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();
  return (
    <>
      <div className="py-20 px-10 md:px-28 lg:px-44 xl:px-56">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl text-gray-500">My Dashboard</h1>
            <h2 className="text-3xl">Welcome, {user?.fullName}</h2>
          </div>

          <Button variant="outline" size={"lg"}>
            + Create Interview
          </Button>
        </div>
        {interviewList.length === 0 && <EmptyState />}
      </div>
    </>
  );
};
export default Dashboard;
