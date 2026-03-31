const user = { name: "Sara Ahmed", id: "STU-981", initials: "S" };

export default function Header({ onMenuClick, darkMode, onToggleTheme, title, subtitle, liveTag }) {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-darkBg/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-white/5 px-4 lg:px-8 py-4 lg:py-6 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* Left: menu + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-textGray hover:text-accent p-1"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars-staggered text-xl" />
          </button>
          <div>
            <h1 className="text-lg lg:text-xl font-bold tracking-tight dark:text-white">{title}</h1>
            {subtitle && (
              <p className="text-[10px] lg:text-[11px] text-textGray flex items-center gap-2">
                {liveTag && <span className="w-1.5 h-1.5 bg-success rounded-full inline-block" />}
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Notification bell */}
          <button
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-cardBg text-textGray border border-gray-200 dark:border-white/10 hover:text-accent transition shadow-inner"
            aria-label="Notifications"
          >
            <i className="fa-regular fa-bell text-lg" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-cardBg rounded-full" />
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-textGray hover:text-accent transition-all bg-gray-50 dark:bg-cardBg"
            aria-label="Toggle theme"
          >
            <i className={`fa-solid ${darkMode ? "fa-moon" : "fa-sun"}`} />
          </button>

          {/* User avatar */}
          <div className="flex items-center gap-2 lg:gap-3 bg-gray-100 dark:bg-cardBg p-1 lg:pr-4 rounded-full border border-gray-200 dark:border-white/5">
            <div className="w-8 h-8 lg:w-9 lg:h-9 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xs lg:text-sm">
              {user.initials}
            </div>
            <div className="hidden sm:block text-[10px] lg:text-[11px] leading-tight text-left">
              <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
              <p className="text-textGray mt-0.5">{user.id}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
