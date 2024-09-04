import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <nav className="flex gap-2 text-2xl text-slate-100">
      <DropdownMenu />
      <Link href={"/profile"} className="h-fit w-fit hover:underline">
        Profile
      </Link>

      <Link href={"/login"} className="h-fit w-fit hover:underline">
        Login
      </Link>
    </nav>
  );
}
