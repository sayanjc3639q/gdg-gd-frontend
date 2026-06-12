import React, { useState } from 'react';
import gdgLogo from '../assets/download-removebg-preview.png';

export default function LoginView({ onLogin, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-md overflow-hidden bg-surface relative">
      {/* Decorative Atmosphere */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]"></div>
      </div>
      {/* Login Container */}
      <main className="w-full max-w-[448px] animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Login Card - 16px radius (rounded-lg) */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-xl elevation-1">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-xl gap-3">
            <img 
              alt="GDG Logo" 
              src={gdgLogo} 
              className="h-16 object-contain" 
            />
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold text-on-surface font-headline-md tracking-tight leading-none">
                Google Developer Groups
              </span>
              <span className="text-xs font-semibold text-on-surface-variant font-body-md mt-1.5 leading-none">
                <span className="text-primary">On Campus</span> • Haldia Institute of Technology
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center">Sign in to continue to Admin Console</p>
          </div>
          {/* Primary Action: Sign in with Google - 12px radius (rounded-md) */}
          <button onClick={onLogin} className="w-full h-12 flex items-center justify-center gap-md bg-surface-container-lowest border border-outline-variant rounded-md font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 active:scale-[0.98] cursor-pointer">
            <img alt="G" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8lf9pZxyH2FFKdECl4qxwQ5DsgxtBh8DPaGXcVC56tbq00E6x_u7eVVjVVip5O9RXgUFlN6Rb8qoT9oUQl7P0YLe1S7igQc_pkJEVlv4hBUETc_PDSYmSe0-kzCwkrUtSqFoIK4u39M8YXqmjPHAhGqDQ0v6yfi9CcvzAAtRTUyTm2iOdvkPwxzoZ8Y9Il7QXLG6Z2CXe15YoMtWxHbYH8dQPd5-gel7kbBVLvr3Gv-_9HPzTg01netVNUvttj4swY8q6P90Zteoq"/>
            Sign in with Google
          </button>
          {/* Divider */}
          <div className="flex items-center my-xl">
            <div className="flex-grow h-[1px] bg-outline-variant"></div>
            <span className="px-md font-label-sm text-label-sm text-outline uppercase tracking-widest">or</span>
            <div className="flex-grow h-[1px] bg-outline-variant"></div>
          </div>
          {/* Form Fields */}
          <form className="space-y-md" onSubmit={handleSubmit}>
            <div className="group">
              <label 
                className={`block font-label-lg text-label-lg mb-xs ml-xs transition-colors duration-200 ${isFocusedEmail ? 'text-primary' : 'text-on-surface-variant'}`} 
                htmlFor="email"
              >
                Email address
              </label>
              <div className="relative">
                {/* 12px radius (rounded-md) */}
                <input 
                  className="w-full h-14 px-md rounded-md border border-outline-variant bg-transparent font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant" 
                  id="email" 
                  placeholder="name@example.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                  required
                />
              </div>
            </div>
            <div className="group">
              <label 
                className={`block font-label-lg text-label-lg mb-xs ml-xs transition-colors duration-200 ${isFocusedPassword ? 'text-primary' : 'text-on-surface-variant'}`} 
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                {/* 12px radius (rounded-md) */}
                <input 
                  className="w-full h-14 px-md rounded-md border border-outline-variant bg-transparent font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  required
                />
                <button 
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-xs">
              <label className="flex items-center gap-sm cursor-pointer group">
                <input className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer transition-all" type="checkbox"/>
                <span className="font-label-lg text-label-lg text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
              <a className="font-label-lg text-label-lg text-primary hover:underline transition-all" href="#">Forgot password?</a>
            </div>
            {/* 12px radius (rounded-md) */}
            <button className="w-full h-14 bg-primary text-on-primary rounded-md font-label-lg text-label-lg hover:shadow-lg hover:opacity-90 transition-all duration-300 active:scale-[0.98] mt-md cursor-pointer font-bold" type="submit">
              Sign In
            </button>
          </form>
          {/* Secondary Actions */}
          <div className="mt-xl pt-lg border-t border-outline-variant text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have access? 
              <a className="text-primary font-label-lg text-label-lg ml-xs hover:underline transition-all" href="#">Request access</a>
            </p>
          </div>
        </div>
        {/* Footer Links */}
        <footer className="mt-xl flex flex-wrap justify-center gap-lg px-md">
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer bg-transparent border-none" onClick={() => onNavigate('privacy')}>Privacy Policy</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer bg-transparent border-none" onClick={() => onNavigate('terms')}>Terms &amp; Conditions</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer bg-transparent border-none" onClick={() => alert('Please sign in to access the full Help Center.')}>Help Center</button>
        </footer>
      </main>
    </div>
  );
}
