"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { TimerType } from "@/lib/types";

export default function usePathChange(delayMS: number = 0) {
  const pathname = usePathname(); // Get current route
  // Use state instead of ref because re-render needed with delay
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    let timerRef: TimerType;
    if (prevPathname !== pathname) {
      // If current path changes, update state after a delay
      timerRef = setTimeout(() => {
        setPrevPathname(pathname);
      }, delayMS);
    }

    return () => {
      clearTimeout(timerRef);
    };
  }, [pathname]);

  return { pathname: prevPathname, finished: prevPathname === pathname };
}
