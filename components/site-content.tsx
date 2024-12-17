"use client";
import { useState } from "react";
import fonts from "./data/fonts";
import FontCard from "./font-card";
import ViewToggle from "./view-toggle";

export default function SiteContent() {

  const [view, setView] = useState("card");

  return (
    <>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 p-4">
        {/* <div className="flex h-[150px] bg-muted items-center justify-center rounded-xl text-muted-foreground">
          ads here
        </div> */}

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-muted-foreground font-normal text-sm">
                Showing {fonts.length} fonts
              </span>
            </div>
            <ViewToggle onViewChange={setView} />
          </div>
          <div className={`${view === "card" ? "grid grid-cols-4  gap-4" : "grid gap-4"}`}>
            {fonts.map((font) =>
              <FontCard key={font.family} font={font} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
