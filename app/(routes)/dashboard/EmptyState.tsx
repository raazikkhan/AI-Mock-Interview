import React from "react";
import Image from "next/image";
import CreateInterviewDialog from "../-components/CreateInterviewDialog";

function EmptyState() {
  return (
    <div className="mt-20 flex justify-center flex-col items-center border-4 border-dotted gap-6 p-20  bg-gray-50 rounded-2xl">
      <Image
        src={"/person.svg"}
        alt="Person Illustration"
        width={100}
        height={100}
      />
      <h1 className="text-lg mt-2 text-gray-500">
        You do not have any Interview Created
      </h1>
      <CreateInterviewDialog />
    </div>
  );
}

export default EmptyState;
