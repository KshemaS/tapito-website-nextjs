"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated
    // and to override any default browser/Next.js scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant to ensure they are at the top immediately
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
