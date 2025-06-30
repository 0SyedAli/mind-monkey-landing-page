// src/components/ProgressBar.jsx (or .tsx)
"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';

export default function LoadingProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This will trigger the progress bar on route changes
  }, [pathname, searchParams]);

  return (
    <NextNProgress
      color="#FF0000"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ showSpinner: false }}
    />
  );
}