import Link from "next/link";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-pink-100">
      <div className="flex gap-4">
        <Link
          href="/Profile"
          className="px-6 py-3 bg-pink-300 text-pink-900 font-medium rounded-lg hover:bg-pink-400 transition"
        >
          Profile
        </Link>


        <Link
          href="/Contact"
          className="px-6 py-3 bg-pink-200 text-pink-900 font-medium rounded-lg hover:bg-pink-300 transition"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}