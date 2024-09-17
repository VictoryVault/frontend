"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          headerTitle: "text-slate-900",
          headerSubtitle: "text-slate-800",
          socialButtonsBlockButton:
            "bg-slate-300 drop-shadow-md  hover:bg-slate-100 hover:drop-shadow-xl",
        },
      }}
    />
  );
}
