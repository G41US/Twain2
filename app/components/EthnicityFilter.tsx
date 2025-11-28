"use client";
import { useState } from "react";

const options = [
  "Black/African",
  "East Asian",
  "South Asian",
  "White/European",
  "Latino/Hispanic",
  "Middle Eastern",
  "Native/Indigenous",
  "Mixed",
];

export default function EthnicityFilter({ onChange }: any) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (eth: string) => {
    const newSel = selected.includes(eth)
      ? selected.filter(x => x !== eth)
      : [...selected, eth];
    setSelected(newSel);
    onChange(newSel);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button
          key={o}
          onClick={() => toggle(o)}
          className={`px-3 py-1 rounded-full border ${selected.includes(o) ? "bg-pink-600 text-white" : "bg-white text-gray-800"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
