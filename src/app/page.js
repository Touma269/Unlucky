import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="flex gap-4">
        <Link
          href="/Profile"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Profile
        </Link>

        <Link
          href="/Contact"
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
