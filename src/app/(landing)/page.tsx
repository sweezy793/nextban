import { LayoutPanelTop } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-red-100 text-red-600 rounded-full uppercase">
          <LayoutPanelTop className="h-6 w-6 mr-2" />
          Your very own task-board
        </div>
        <div className="text-3xl md:text-6xl text-center bg-gradient-to-r from-red-800 to-orange-300 text-white px-4 p-2 rounded-md pb-4 w-fit">
          NextBan.AI
        </div>
        <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
          Maximize efficiency by moving forward the work that matters most. Move
          fast, stay aligned, and build better - together
        </div>
        <Button className="mt-6" size="lg" asChild>
          {/* as child prop merges link together with button, if not given dom will have a link inside a button */}
          <Link href="/sign-up">{`Let's get started`}</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
