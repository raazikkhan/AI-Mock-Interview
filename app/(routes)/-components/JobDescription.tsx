import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const JobDescription = ({
  onHandleInputChange,
}: {
  onHandleInputChange: (field: string, value: string) => void;
}) => {
  return (
    <div className=" border rounded-lg p-10">
      <div>
        <label>Job Title</label>
        <Input
          placeholder="Ex. Full Stack Developer"
          onChange={(event) =>
            onHandleInputChange("jobTitle", event.target.value)
          }
        />
      </div>
      <div className="mt-6">
        <label>Job Description</label>
        <Textarea
          placeholder="Enter or Paste Job Description Here..."
          onChange={(event) =>
            onHandleInputChange("jobDescription", event.target.value)
          }
          className="h-[200px]"
        />
      </div>
    </div>
  );
};
export default JobDescription;
