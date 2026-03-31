import { NavLink } from "react-router-dom";

const navItems = [
  { href: "/dashboard", icon: "fa-solid fa-table-columns", label: "Dashboard" },
  { href: "/book-trips", icon: "fa-regular fa-calendar-check", label: "Book Trip" },
  { href: "/my-trips", icon: "fa-solid fa-route", label: "My Trips" },
  { href: "/route-details", icon: "fa-solid fa-map-location-dot", label: "Route Details" },
  { href: "/track-bus", icon: "fa-solid fa-location-crosshairs", label: "Track Bus" },
  { href: "/attendance", icon: "fa-solid fa-chart-simple", label: "Attendance" },
  { href: "/notifications", icon: "fa-regular fa-bell", label: "Notifications" },
  { href: "/chat", icon: "fa-regular fa-comments", label: "Route Chat" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-sidebarBg flex flex-col border-r border-gray-200 dark:border-white/5 transform transition-transform duration-300 ease-in-out flex-shrink-0 lg:relative lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 text-gray-500 dark:text-textGray hover:text-accent p-2"
      >
        <i className="fa-solid fa-xmark text-2xl" />
      </button>

      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-accent p-2 rounded-lg text-black shadow-[0_0_15px_rgba(249,178,51,0.3)]">
          <i className="fas fa-bus text-lg" />
        </div>
        <div>
          <h3 className="font-bold text-sm tracking-wide dark:text-white">SmartBus</h3>
          <p className="text-[10px] text-textGray uppercase font-medium">Student Portal</p>
        </div>
      </div>

      <div className="px-4 py-2 text-[10px] text-textGray font-bold uppercase tracking-widest mt-4">
        Main
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1 mt-2 text-sm overflow-y-auto no-scrollbar">
        {navItems.map(({ href, icon, label }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-accent/10 border border-accent text-accent font-medium"
                  : "text-textGray hover:bg-gray-100 dark:hover:bg-white/5"
              }`
            }
          >
            <i className={`${icon} w-5 text-center`} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="p-4 border-t border-gray-200 dark:border-white/5 space-y-1">
        <a
          href="/support"
          className="flex items-center gap-3 px-4 py-2 text-sm text-textGray hover:text-gray-900 dark:hover:text-white transition"
        >
          <i className="fa-regular fa-circle-question w-5 text-center" /> Support
        </a>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium ${
              isActive
                ? "bg-accent/10 border border-accent text-accent shadow-sm"
                : "text-textGray hover:bg-gray-100 dark:hover:bg-white/5"
            }`
          }
        >
          <i className="fa-solid fa-gear w-5 text-center" /> Settings
        </NavLink>
        <a
          href="/sign-in"
          className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:text-red-400 transition"
        >
          <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center" /> Logout
        </a>
      </div>
    </aside>
  );
}
