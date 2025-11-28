import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/dashboard" className="text-xl font-semibold text-pink-600">Cultural Match</Link>
      <Link href="/profile" className="text-gray-700 hover:text-pink-600">My Profile</Link>
    </nav>
  );
}
