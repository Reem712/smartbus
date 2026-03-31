import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SettingsPage from "./pages/SettingsPage";
import TrackBusPage from "./pages/TrackBusPage";

const pageMeta = {
  "/settings": { title: "Settings", subtitle: "Manage your account" },
  "/track-bus": { title: "Track Bus", subtitle: "Live Tracking", liveTag: true },
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");
  const location = useLocation();
  const meta = pageMeta[location.pathname] || { title: "SmartBus", subtitle: "" };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f3f4f6] dark:bg-darkBg text-gray-900 dark:text-white font-inter overflow-x-hidden transition-colors duration-300">
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] lg:hidden"
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 relative overflow-y-auto no-scrollbar flex flex-col">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((d) => !d)}
          title={meta.title}
          subtitle={meta.subtitle}
          liveTag={meta.liveTag}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/settings" replace />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/track-bus" element={<TrackBusPage darkMode={darkMode} />} />
        </Routes>
      </main>
    </div>
  );
}
