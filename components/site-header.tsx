import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SiteHeader() {
  return (
    <header className="flex flex-col justify-center w-full px-4 h-[65px] shadow-sm bg-background">
      <div className="flex items-center justify-between px-4 space-x-8">
        <h1 className="text-2xl font-normal">
          <span className="text-primary">Fontora</span>
        </h1>
        {/* search box here */}
        <div className="flex items-center flex-grow relative max-w-[500px]">
          <Search className="absolute left-2 text-muted-foreground w-5 h-5" />
          <Input
            type="search"
            placeholder="Search for fonts"
            className="rounded-full h-10 px-4 pl-8 bg-muted/40"
          />
        </div>

        <nav className="flex space-x-4">
          <Button className="text-sm">Sign In</Button>
          <Button className="text-sm" variant="secondary">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  );
}
