"use client";
import { useState } from "react";

export default function TestPage() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
      />
      <p>Value: {value}</p>
    </div>
  );
}
