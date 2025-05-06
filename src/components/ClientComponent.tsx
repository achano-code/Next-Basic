"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState<number>(0);
  console.log("Client Component");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Count: {count}</button>
    </div>
  );
}
