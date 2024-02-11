import {Button} from "../ui/button";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog";
import {Input} from "../ui/input";
import {Label} from "../ui/label";


const AddToDoModal = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
    <button
      className="bg-green-600 px-3 py-2 rounded-md text-white flex justify-center items-center text-base font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="inline-block pr-1 bg-green-600">Add Task</span>
    </button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Task</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Task
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input id="username" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  );
};

export default AddToDoModal;