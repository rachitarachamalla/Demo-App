"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200
          ${
            isActive
              ? "bg-blue-600 text-white font-semibold shadow-md"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 px-6">

       
        <div className="flex gap-5 items-center">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/mock-users","UserList")}
          {navLink("/jokes","Jokes")}
        </div>

        
        <div >
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-1.5 bg-blue-600 text-sm text-white rounded-md hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { userButtonAvatarBox: "h-9 w-9" } }} />
          </SignedIn>
        </div>
        
      </div>
    </nav>
  );
};
