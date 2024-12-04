import { Search } from 'lucide-react';

const navItems = ['Music', 'Podcast', 'Live', 'Radio'];

export function Header() {
  return (
    <header className="font-poppins sticky top-0 z-10 flex items-center justify-between bg-gradient-to-b from-[#4C0000] to-transparent p-6 backdrop-blur-sm">
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Search for Artists"
          className="w-64 rounded-full bg-neutral-800/50 py-2 pl-10 pr-4 text-sm text-white placeholder-neutral-400 outline-none ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-red-600"
        />
      </div>
    </header>
  );
}