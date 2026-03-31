export default function SettingCard({ children }) {
  return (
    <div className="bg-white dark:bg-cardBg border border-gray-200 dark:border-white/5 rounded-[20px] lg:rounded-[24px] p-5 lg:p-6 shadow-sm">
      {children}
    </div>
  );
}
