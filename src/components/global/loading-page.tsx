import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";

function LoadingPage() {
  return (
    <div className="h-full w-full items-center justify-center">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
}

export default LoadingPage;
