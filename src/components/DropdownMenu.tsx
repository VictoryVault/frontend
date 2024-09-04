"use client";

import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group relative h-fit w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Tournaments &#9207;</span>
      {isHovered ? (
        <div className="absolute left-2 top-6 flex w-44 flex-col rounded-md border border-[hsl(280,100%,70%)] bg-transparent p-1 text-lg text-[hsl(280,100%,70%)] shadow-lg shadow-black">
          <Link href={"/tournaments"} className="hover:underline">
            My Tournaments
          </Link>
          <Link href={"/search-tournament"} className="hover:underline">
            Search Tournament{" "}
          </Link>
          <Link href={"/create-tournament"} className="hover:underline">
            Create Tournament
          </Link>
        </div>
      ) : null}
    </div>
  );
}
