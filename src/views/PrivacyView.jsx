import React from 'react';
import gdgLogo from '../assets/download-removebg-preview.png';

export default function PrivacyView({ onBack, isLoggedIn }) {
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
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">Privacy Policy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Learn how we protect your personal data and respect your privacy rights.</p>
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
              <span className="material-symbols-outlined text-primary">security</span>
              1. Information We Collect
            </h3>
            <p className="text-body-md text-on-surface-variant">
              To support collaboration, we collect basic profile details: your name, institutional email address, college roll number, academic department, current role in the chapter, status, and profile avatar. No sensitive financial or commercial personal information is processed on this portal.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span>
              2. How We Use Information
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Collected information is used exclusively to facilitate project organization, assign task deadlines, log graphic poster submissions, and track chapter growth metrics. Your email is used for automated notification preferences regarding upcoming design deadlines.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">share</span>
              3. Data Sharing &amp; Protection
            </h3>
            <p className="text-body-md text-on-surface-variant">
              We enforce strict confidentiality standards. We do not sell, rent, or distribute community member contact information, roll numbers, or emails to third parties. All credentials and data inputs are kept secure under organizational privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-title-lg text-title-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings</span>
              4. Control &amp; Preferences
            </h3>
            <p className="text-body-md text-on-surface-variant">
              You maintain complete control over your profile metadata and notifications. You can toggle email alerts or push notification preferences at any time under the **System Settings** view of the console dashboard.
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
