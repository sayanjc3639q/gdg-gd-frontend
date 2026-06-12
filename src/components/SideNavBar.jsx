import React from 'react';

export default function SideNavBar({ currentView, onNavigate, mobileOpen, setMobileOpen }) {
  const links = [
    { name: 'Dashboard', icon: 'dashboard', view: 'dashboard' },
    { name: 'Team Directory', icon: 'groups', view: 'members' },
    { name: 'Projects', icon: 'folder', view: 'projects' },
    { name: 'Admin Panel', icon: 'admin_panel_settings', view: 'admin' },
    { name: 'My Portfolio', icon: 'account_box', view: 'portfolio' }
  ];

  return (
    <>
      {/* Mobile Drawer Trigger (FAB bottom left or toggle in header) */}
      <button 
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-primary text-on-primary shadow-xl z-50 flex items-center justify-center md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
      </button>

      <aside className={`fixed md:sticky top-16 left-0 h-[calc(100vh-64px)] z-40 bg-surface-container-low border-r border-outline-variant w-64 flex flex-col p-4 transition-transform duration-300 md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:flex'}`}>
        <nav className="flex-grow space-y-1">
          {links.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button 
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full active:scale-95 transition-all duration-150 text-left ${isActive ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{link.icon}</span>
                {link.name}
              </button>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-outline-variant pt-4 space-y-1">
          <button className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full transition-all text-left ${currentView === 'help' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`} onClick={() => onNavigate('help')}>
            <span className="material-symbols-outlined">help</span> Help
          </button>
          <button className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full transition-all text-left ${currentView === 'settings' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`} onClick={() => onNavigate('settings')}>
            <span className="material-symbols-outlined">settings</span> Settings
          </button>
          <button className="w-full flex items-center gap-4 text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-variant rounded-full transition-all text-left" onClick={() => onNavigate('login')}>
            <span className="material-symbols-outlined text-error">logout</span> Logout
          </button>
        </div>
      </aside>
    </>
  );
}
