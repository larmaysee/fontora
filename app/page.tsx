import SiteContent from "@/components/site-content";
import SiteHeader from "@/components/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {

  return (
    <>
      <div className="mx-auto min-h-screen lg:grid-cols-[300px_1fr]">
        {/* <div className="items-center justify-center bg-muted hidden lg:flex border-r">
          <span className="text-center text-sm text-muted-foreground">
            Ads Here
          </span>
        </div> */}
        <div className="flex flex-col justify-start h-full max-h-screen overflow-hidden">
          <SiteHeader />
          <ScrollArea className="h-[calc(100vh-65px)] w-full">
            <SiteContent />
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
