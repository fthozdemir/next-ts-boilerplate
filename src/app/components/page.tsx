"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { Skeleton } from "@/components/ui/skeleton";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function ComponentPage() {
  return (
    <section>
      <Head>Components</Head>
      <h1>Components</h1>
      <div className="flex w-1/3 flex-col space-y-3 py-48">
        <h2>Skeleton</h2>
        <Skeleton className="h-[100px] w-full rounded-xl" />
        <div className="space-y-2 pt-10">
          <Skeleton className="h-[30px] w-3/5" />
          <Skeleton className="h-[30px] w-full" />
          <Skeleton className="h-[30px] w-3/4" />
        </div>
      </div>
    </section>
  );
}
