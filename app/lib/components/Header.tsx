import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
    return <header className="flex p-2 gap-4 h-24 items-center border-gray-300/50 fixed bg-gra-100 w-dvw font-sans">
        {/* Show the sign-in and sign-up buttons when the user is signed out */}
        <div className="w-60 italic font-sans font-bold">
            {/* <h1 className="font-bold text-xl text-left">CM</h1> */}
        </div>
        <div className="flex justify-center flex-1 h-8 text-xl">
            <button className="px-2 hover:bg-black hover:text-green-100 cursor-pointer transition duration-200 font-semibold">
                About
            </button>
            <div className="w-0 h-full border-r-2 " />
            <button className="px-2 hover:bg-black hover:text-green-100 cursor-pointer transition duration-200 font-semibold">
                Docs
            </button>
            <div className="w-0 h-full border-r-2 " />
            <button className="px-2 hover:bg-black hover:text-green-100 cursor-pointer transition duration-200 font-semibold">
                Guides
            </button>
            <div className="w-0 h-full border-r-2 " />
            <button className="px-2 hover:bg-black hover:text-green-100 cursor-pointer transition duration-200 font-semibold">
                Help
            </button>
            <div className="w-0 h-full border-r-2 " />
            <button className="px-2 hover:bg-black hover:text-green-100 cursor-pointer transition duration-200 font-semibold">
                Contact
            </button>
        </div>
        <div className="w-60 flex justify-end">

            {/* Show the user button when the user is signed in */}
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

    </header>
}