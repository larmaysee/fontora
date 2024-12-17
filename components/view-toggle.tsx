import { LayoutGrid, ListIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type ViewToggleProps = {
  onViewChange: (viewType: string) => void;
};

export default function ViewToggle({ onViewChange }: ViewToggleProps) {
  const [view, setView] = useState("card");

  const handleViewChange = (viewType: string) => {
    setView(viewType);
    onViewChange(viewType);
  };

  return (
    <div className="flex">
      <Button
        size={"icon"}
        variant={view === "card" ? "default" : "outline"}
        onClick={() => handleViewChange("card")}
        className="rounded-lg rounded-r-none"
      >
        <LayoutGrid size={24} />
      </Button>
      <Button
        size={"icon"}
        variant={view === "list" ? "default" : "outline"}
        onClick={() => handleViewChange("list")}
        className="rounded-lg rounded-l-none"
      >
        <ListIcon size={24} />
      </Button>
    </div>
  );
}
