"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const [count, setCount] = useState<number>(0);
  const router = useRouter();
  console.log("Client Component");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      クライアント
      <button onClick={() => handleClick()}>Count: {count}</button>
      <Link href={"/about"}>About</Link>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
}
