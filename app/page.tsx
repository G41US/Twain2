"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-10">
      <h1 className="text-5xl font-bold mb-6">Cultural Match</h1>

      <p className="text-gray-700 text-lg max-w-lg mb-8">
        A modern dating experience that lets you optionally match by cultural or ethnic background — only if you want to.
      </p>

      <Link href="/dashboard" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-lg">
        Enter App
      </Link>
    </div>
  );
}
