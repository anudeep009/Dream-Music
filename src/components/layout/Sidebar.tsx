import { Home, TrendingUp, Library, Compass, Settings, LogOut, Music } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: TrendingUp, label: 'Trends' },
  { icon: Library, label: 'Library' },
  { icon: Compass, label: 'Discover' },
];

const generalItems = [
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Log Out' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-20 bg-[#0A0A0A] p-4 text-white transition-all duration-300 ease-in-out hover:w-64 lg:relative lg:w-64">
      {/* Header */}
      <div className="flex items-center gap-3 pb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
          <Music className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white opacity-0 transition-opacity duration-300 lg:opacity-100">
          Dream<span className="text-red-500">Music</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-8">
        {/* Menu Section */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-500 tracking-wider">
            Menu
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button className="flex w-full items-center gap-4 rounded-lg p-3 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
                  <item.icon className="h-6 w-6" />
                  <span className="text-base opacity-0 transition-opacity duration-300 lg:opacity-100">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* General Section */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-500 tracking-wider">
            General
          </h2>
          <ul className="space-y-2">
            {generalItems.map((item) => (
              <li key={item.label}>
                <button className="flex w-full items-center gap-4 rounded-lg p-3 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
                  <item.icon className="h-6 w-6" />
                  <span className="text-base opacity-0 transition-opacity duration-300 lg:opacity-100">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
