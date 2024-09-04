import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="sticky z-30 flex w-full justify-between px-2">
      <h1 className="text-[50px] font-extrabold tracking-tight text-slate-100">
        <Link href={"/"}>Victory</Link>
        <Link href={"/"} className="text-[hsl(280,100%,70%)]">
          Vault
        </Link>
      </h1>
      <Navbar />
    </div>
  );
}
