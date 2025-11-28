"use client";
import { useState } from "react";

export default function ProfileForm({ user }: any) {
  const [name, setName] = useState(user.name || "");
  const [age, setAge] = useState(user.age || "");
  const [ethnicity, setEthnicity] = useState(user.ethnicity || "");
  const [showEthnicity, setShowEthnicity] = useState(user.showEthnicity);

  const handleSave = async () => {
    await fetch("/api/updateProfile", {
      method: "POST",
      body: JSON.stringify({ name, age, ethnicity, showEthnicity }),
    });
    alert("Saved!");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto space-y-6">
      <input className="w-full border p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input className="w-full border p-2 rounded" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" type="number" />

      <input className="w-full border p-2 rounded" value={ethnicity} onChange={e => setEthnicity(e.target.value)} placeholder="Ethnicity (optional)" />

      <label className="flex gap-3 items-center">
        <input type="checkbox" checked={showEthnicity} onChange={e => setShowEthnicity(e.target.checked)} />
        Show ethnicity on profile
      </label>

      <button onClick={handleSave} className="w-full py-3 bg-pink-600 text-white rounded-lg">
        Save Profile
      </button>
    </div>
  );
}
