"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={`block px-3 py-2 rounded-md text-sm transition-all
          ${
            isActive
              ? "bg-blue-600 text-white font-semibold"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md dark:bg-dark">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
       
        <div className="flex h-14 items-center justify-between dark:text-white">
         
          <span className="text-white font-bold text-lg">MyApp</span>

          
          <div className="hidden md:flex gap-5 items-center  ">
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/mock-users", "UserList")}
            {navLink("/jokes", "Jokes")}
          </div>

          
          
          <div className="flex items-center gap-3">
           
            <div className="hidden md:block">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-3 py-1.5 bg-blue-600 text-sm text-white rounded-md hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: { userButtonAvatarBox: "h-9 w-9" },
                  }}
                />
              </SignedIn>
            </div>
            <div className="flex flex-1 justify-end">
            <ThemeToggle/>
          </div>

            
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-200 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        
        {open && (
          <div className="md:hidden pb-4 space-y-1 dark:text-white">
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/mock-users", "UserList")}
            {navLink("/jokes", "Jokes")}

            
            <div className="pt-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full px-3 py-2 bg-blue-600 text-sm text-white rounded-md hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
