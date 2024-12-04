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
    <aside className="font-poppins fixed left-0 top-0 z-50 h-screen w-20 bg-[#0A0A0A] p-4 text-white transition-all duration-300 ease-in-out hover:w-64 lg:relative lg:w-64">
      {/* Header */}
      <div className="flex items-center gap-3 pb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg">
          <Music className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-white opacity-0 transition-opacity duration-300 lg:opacity-100">
          <span className="text-red-500">Dream</span>Music
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-[350px]">
        {/* Menu Section */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-500 tracking-wider">
            Menu
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button className="flex w-full items-center gap-4 rounded-lg p-1 text-white transition-colors hover:bg-neutral-800 hover:text-white">
                  <item.icon className="h-6 w-6 text-red-500" />
                  <span className="text-sm opacity-0 transition-opacity duration-300 lg:opacity-100">
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
          <ul className="space-y-1">
            {generalItems.map((item) => (
              <li key={item.label}>
                <button className="flex w-full items-center gap-4 rounded-lg p-1 text-white transition-colors hover:bg-neutral-800 hover:text-white">
                  <item.icon className="h-6 w-6 text-red-500" />
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
