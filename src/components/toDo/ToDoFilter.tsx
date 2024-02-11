import {useState} from "react";
import {Button} from "../ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger} from "../ui/dropdown-menu";

const ToDoFilter = () => {
  const [position, setPosition] = useState("bottom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="high">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToDoFilter;