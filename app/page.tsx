"use client";

import "@/app/lib/arrayExtensions";

import Image from "next/image";
import { checkIfObjectInstanceOfClass, sleep } from "./utils";

export default function Home() {
  const checkIfInstanceOfClass = checkIfObjectInstanceOfClass(new Date(), Date);
  console.log("Result from, checkIfInstanceOfClass", checkIfInstanceOfClass);

  const array = [1, 2, 3];
  console.log("Array last element is: ", array.last());

  const handleClick = () => {
    sleep(1000).then(() => console.log("Sleep function executed."));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This application will be used for learning leetcode exercises.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I'll display examples and results on this screen.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Result for checkIfInstanceOfClass new Date and Date is{" "}
            {checkIfInstanceOfClass === true ? "true" : "false"}.
          </p>
        </div>

        <button onClick={handleClick}>
          Click me if you want to test sleep function
        </button>
      </main>
    </div>
  );
}
