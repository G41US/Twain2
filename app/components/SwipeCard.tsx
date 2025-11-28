"use client";
import { useState } from "react";

export default function SwipeCard({ profile, onSwipe }: any) {
  const [dragStart, setDragStart] = useState<number | null>(null);

  const handleTouchStart = (e: any) => setDragStart(e.touches[0].clientX);
  const handleTouchEnd = (e: any) => {
    if (dragStart === null) return;
    const diff = e.changedTouches[0].clientX - dragStart;

    if (diff > 80) onSwipe("right");
    else if (diff < -80) onSwipe("left");
  };

  return (
    <div
      className="w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={profile.image}
        alt="User"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
        {profile.showEthnicity && (
          <p className="text-gray-600 text-sm">{profile.ethnicity}</p>
        )}
      </div>
    </div>
  );
}
