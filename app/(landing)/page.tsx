import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-green-100">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16  dark:bg-black ">
        <div className="w-xl">
          <h1 className="font-bold text-4xl text-left">Cafe Manager</h1>
          <p className="font-semibold text-2xl text-right">Manage your cafe with ease.</p>
        </div>

        <div className="flex gap-20 items-center">
          <div className="flex flex-col items-center text-center mt-20">
            <ul className="flex flex-col items-center text-center gap-2 text-2xl">
              <li>
                <p>
                  - Manage your inventory and products
                </p>
              </li>
              <li>
                <p>
                  - Track suppliers and orders
                </p>
              </li>
              <li>
                <p>
                  - Assign employees to shifts
                </p>
              </li>
              <li>
                <p>
                  - Analyse data with cutting-edge AI
                </p>
              </li>

            </ul>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-20">
            <Link
              className="flex h-12 w-full text-lg items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href={"/sign-in"}
            >

              Get started
            </Link>
            <Link
              className="flex h-12 w-full text-lg items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="/sign-in"
            >
              Login
            </Link>
          </div>
        </div>



        <p className=" text-xl leading-8 text-zinc-800 dark:text-zinc-400 mt-20">
          Been sent a signup code by your employer? Head over to {" "}
          <Link
            href={'/auth/employee'}
            className="font-medium text-zinc-950 dark:text-zinc-50 italic"
          >
            Employee Login {" "}
          </Link>
          and get started.
        </p>
      </main>
    </div>
  );
}
