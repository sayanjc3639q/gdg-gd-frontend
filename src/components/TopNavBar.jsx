import React, { useState } from 'react';
import gdgLogo from '../assets/download-removebg-preview.png';

export default function TopNavBar({ currentView, onNavigate, notifications, showNotifications, setShowNotifications }) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop sticky top-0 z-50 h-16 shadow-sm">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
        <img 
          alt="GDG Logo" 
          src={gdgLogo} 
          className="h-10 object-contain" 
        />
        <div className="flex flex-col text-left">
          <span className="text-sm font-bold text-on-surface font-headline-md tracking-tight leading-none">
            Google Developer Groups
          </span>
          <span className="text-[10px] font-semibold text-on-surface-variant font-body-md mt-[2px] leading-none">
            <span className="text-primary">On Campus</span> • Haldia Institute of Technology
          </span>
        </div>
      </div>
      <div className="flex items-center gap-lg">
        <div className="hidden md:flex items-center gap-md">
          <nav className="flex gap-4">
            <button 
              className={`font-bold hover:bg-surface-variant transition-colors px-3 py-2 rounded-lg font-label-lg text-label-lg ${currentView === 'dashboard' ? 'text-primary' : 'text-on-surface-variant'}`} 
              onClick={() => onNavigate('dashboard')}
            >
              Dashboard
            </button>

            <button 
              className={`hover:bg-surface-variant transition-colors px-3 py-2 rounded-lg font-label-lg text-label-lg ${currentView === 'projects' ? 'text-primary' : 'text-on-surface-variant'}`} 
              onClick={() => onNavigate('projects')}
            >
              Projects
            </button>
            <button 
              className={`hover:bg-surface-variant transition-colors px-3 py-2 rounded-lg font-label-lg text-label-lg ${currentView === 'members' ? 'text-primary' : 'text-on-surface-variant'}`} 
              onClick={() => onNavigate('members')}
            >
              Members
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4 relative">
          {/* Notifications Icon Button */}
          <div className="relative">
            <button 
              className="material-symbols-outlined text-on-surface-variant p-2 rounded-full hover:bg-surface-variant transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              notifications
            </button>
            {showNotifications && (
              <div className="absolute right-0 top-12 w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl py-2 z-[100] animate-in fade-in duration-150">
                <div className="px-4 py-2 border-b border-outline-variant font-bold text-sm text-on-surface">Notifications</div>
                <div className="divide-y divide-outline-variant max-h-48 overflow-y-auto">
                  {notifications.map((notif, idx) => (
                    <div key={idx} className="px-4 py-2.5 text-xs text-on-surface-variant hover:bg-surface-container-low transition-colors">
                      {notif}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button className="material-symbols-outlined text-on-surface-variant p-2 rounded-full hover:bg-surface-variant transition-colors" onClick={() => onNavigate('admin')}>
            settings
          </button>
          <div className="relative">
            <div 
              className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant cursor-pointer"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            >
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAii0Aw_3PziQvnv4m2zOpcpJ9J-dUW9iCQ4vkNy-IiPIUgevo78bYt_QwerGYp86KyFu2KdT-oshe11BhwvHRgyodsJjX_pF_ePy8iPIQc6xsF3AUU7UG-j6PzLIXnxETHGycKbWld4OHrBQzFw1noqQTI90aTAZnppL0uJYjL-GXnKXuRqacxMLPfnCxsdq0DAq4R1dEKGGVvKJOc7ely5jVKirZ_4XiWJIJZPQlfgGcY5XiVFKNK_XrKOgLp8vHO5DAxu4PJg-A9"
              />
            </div>
            {profileMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40 cursor-default" 
                  onClick={() => setProfileMenuOpen(false)}
                />
                <div className="absolute right-0 top-12 w-52 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-150">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors text-left" onClick={() => { onNavigate('portfolio'); setProfileMenuOpen(false); }}>
                    <span className="material-symbols-outlined text-lg">account_circle</span>View Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors text-left" onClick={() => { onNavigate('login'); setProfileMenuOpen(false); }}>
                    <span className="material-symbols-outlined text-lg">switch_account</span>Switch Account
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors text-left" onClick={() => { onNavigate('terms'); setProfileMenuOpen(false); }}>
                    <span className="material-symbols-outlined text-lg">description</span>Terms &amp; Conditions
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors text-left" onClick={() => { onNavigate('privacy'); setProfileMenuOpen(false); }}>
                    <span className="material-symbols-outlined text-lg">policy</span>Privacy Policy
                  </button>
                  <div className="border-t border-outline-variant my-1"></div>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-error hover:bg-error-container/10 transition-colors text-left" onClick={() => { onNavigate('login'); setProfileMenuOpen(false); }}>
                    <span className="material-symbols-outlined text-lg text-error">logout</span>Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
