import React from 'react';
import gdgLogo from '../assets/download-removebg-preview.png';

export default function TermsView({ onBack, isLoggedIn }) {
  const containerClass = isLoggedIn 
    ? "w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300"
    : "min-h-screen p-md md:p-xl max-w-4xl mx-auto space-y-xl animate-in fade-in duration-300 flex flex-col justify-center";

  return (
    <div className={isLoggedIn ? "" : "bg-background min-h-screen text-on-background py-12"}>
      <main className={containerClass}>
        {!isLoggedIn && (
          <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={onBack}>
            <img alt="GDG Logo" src={gdgLogo} className="h-10 object-contain" />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-on-surface font-headline-md tracking-tight leading-none">
                Google Developer Groups
              </span>
              <span className="text-[10px] font-semibold text-on-surface-variant font-body-md mt-[2px] leading-none">
                <span className="text-primary">On Campus</span> • Haldia Institute of Technology
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">Terms &amp; Conditions</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Please read these terms carefully before using the GDG Campus Task Manager.</p>
          </div>
          {!isLoggedIn && (
            <button 
              onClick={onBack}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-md font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Sign In
            </button>
          )}
        </div>

        <section className="bg-surface-container-lowest p-6 md:p-8 rounded-lg border border-outline-variant shadow-sm space-y-lg text-on-surface">
          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">gavel</span>
              1. Acceptance of Terms
            </h3>
            <p className="text-body-md text-on-surface-variant">
              By accessing and using this portal, you agree to comply with and be bound by these Terms &amp; Conditions. This platform is designed solely for member collaboration, event coordination, and task management within the Google Developer Groups on Campus chapter at Haldia Institute of Technology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">groups</span>
              2. User Accounts &amp; Conduct
            </h3>
            <p className="text-body-md text-on-surface-variant">
              All community members must sign in using their authorized chapter credentials. You are responsible for maintaining the confidentiality of your account details. Any form of harassment, unauthorized access, or deviation from the official GDG Community Guidelines and Chapter Code of Conduct is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">palette</span>
              3. Tasks, Designs &amp; Contributions
            </h3>
            <p className="text-body-md text-on-surface-variant">
              All visual assets, designs, illustrations, and codebase repositories submitted or updated via this portal remain the intellectual property of the respective creators. However, by uploading materials, you grant GDG on Campus HIT the non-exclusive license to use these assets for non-profit community marketing, event organization, and showcase purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">no_accounts</span>
              4. Termination of Access
            </h3>
            <p className="text-body-md text-on-surface-variant">
              We reserve the right to suspend or terminate your access to the Task Manager console at our sole discretion, without prior notice, if you violate any of the community regulations, display non-collaborative behavior, or cease to be an active member of the GDG HIT Chapter.
            </p>
          </div>
        </section>

        <footer className="p-gutter text-center">
          <p className="text-label-sm font-label-sm text-on-surface-variant">Last Updated: June 11, 2026 • GDG HIT Chapter</p>
        </footer>
      </main>
    </div>
  );
}
