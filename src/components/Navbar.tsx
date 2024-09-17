import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { SignedIn, UserButton, SignIn } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex gap-2 text-2xl text-slate-100 px-2 pt-3">
      <DropdownMenu />

      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
