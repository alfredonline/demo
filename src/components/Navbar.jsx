import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-red-500">Airbnb</span>
            </div>
            <div className="flex gap-6 text-gray-700">
                <Link href="/" className="hover:text-red-500">Home</Link>
                <Link href="/test-page" className="hover:text-red-500">Explore</Link>
            </div>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">Login</button>
                <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600">Sign Up</button>
            </div>
        </nav>
    )
}