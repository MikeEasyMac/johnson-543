import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-red-700 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav className="flex items-center gap-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/posts" className="hover:underline">Posts</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}