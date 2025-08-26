"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import EmptyState from "./EmptyState";
import CreateInterviewDialog from "../-components/CreateInterviewDialog";

const Dashboard = () => {
  const [interviewList, setInterviewList] = useState([]);
  console.log(setInterviewList);
  const { user } = useUser();
  return (
    <>
      <div className="py-20 px-10 md:px-28 lg:px-44 xl:px-56">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl text-gray-500">My Dashboard</h1>
            <h2 className="text-3xl">Welcome, {user?.fullName}</h2>
          </div>
          <CreateInterviewDialog />
        </div>
        {interviewList.length === 0 && <EmptyState />}
      </div>
    </>
  );
};
export default Dashboard;
