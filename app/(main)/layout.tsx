import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <header className="flex justify-end items-center p-4 gap-4 h-16 bg-white dark:bg-black fixed w-dvw">
                {/* Show the sign-in and sign-up buttons when the user is signed out */}
                <SignedOut>
                    <SignInButton />
                    <SignUpButton>
                        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>
                {/* Show the user button when the user is signed in */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header>
            {/* <Header /> */}
            {children}
        </div>
    )
}