"use client";

import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import "@/lib/env";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from "~/svg/Logo.svg";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className="container flex items-center justify-center bg-white">
        <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <Logo className="size-24" />
          <h1 className="mt-8 text-4xl md:text-6xl">Hello, World!</h1>
          <p className="mt-4 max-w-lg text-lg">
            Welcome to your new project. This is a starter template for your
            Next.js project.
          </p>
          <Link
            href="/components"
            className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
          >
            Components
          </Link>
        </div>
        <footer className="absolute bottom-2 text-gray-700">
          © {new Date().getFullYear()} By fthozdemir
        </footer>
      </section>
    </main>
  );
}
