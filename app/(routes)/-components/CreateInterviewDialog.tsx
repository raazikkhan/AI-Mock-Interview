import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeUpload from "./ResumeUpload";
import { DialogClose } from "@radix-ui/react-dialog";
import { Ghost } from "lucide-react";

const CreateInterviewDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {" "}
          <Button variant={"outline"} size={"lg"} className="mt-4">
            + Create Interview{" "}
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-3xl">
          <DialogHeader>
            <DialogTitle>Please Submit Following Details</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="resume-upload" className="w-full">
                <TabsList>
                  <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                  <TabsTrigger value="job-description">
                    Job Description
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="resume-upload">
                  <ResumeUpload />
                </TabsContent>
                <TabsContent value="job-description">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button variant={"ghost"}>Cancel</Button>
            </DialogClose>
            <Button variant={"outline"}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CreateInterviewDialog;
