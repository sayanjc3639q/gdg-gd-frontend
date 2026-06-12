import React, { useState } from 'react';

export default function SettingsView() {
  const [notifPreferences, setNotifPreferences] = useState({ email: true, push: false });
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      <div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">System Settings</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Configure your personal notifications, system themes, and profile settings.</p>
      </div>

      <section className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm max-w-2xl space-y-lg">
        {/* Theme settings */}
        <div className="flex justify-between items-center py-3 border-b border-outline-variant">
          <div>
            <h4 className="font-semibold text-on-surface">Dark Theme</h4>
            <p className="text-xs text-on-surface-variant">Toggle dark theme across the admin panel dashboard.</p>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none cursor-pointer ${darkMode ? 'bg-primary' : 'bg-surface-dim'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Notifications settings */}
        <div className="space-y-4">
          <h4 className="font-semibold text-on-surface">Notification Preferences</h4>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="text-sm text-on-surface-variant">Email alerts for newly assigned tasks</span>
            <input 
              type="checkbox" 
              checked={notifPreferences.email} 
              onChange={() => setNotifPreferences({ ...notifPreferences, email: !notifPreferences.email })}
              className="h-5 w-5 rounded-md border-outline-variant text-primary focus:ring-primary cursor-pointer transition-all"
            />
          </label>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="text-sm text-on-surface-variant">System push notifications on deadline updates</span>
            <input 
              type="checkbox" 
              checked={notifPreferences.push} 
              onChange={() => setNotifPreferences({ ...notifPreferences, push: !notifPreferences.push })}
              className="h-5 w-5 rounded-md border-outline-variant text-primary focus:ring-primary cursor-pointer transition-all"
            />
          </label>
        </div>
      </section>
    </main>
  );
}
