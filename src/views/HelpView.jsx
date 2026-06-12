import React from 'react';

export default function HelpView() {
  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      <div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">Help Center &amp; Guidelines</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Find tutorials, brand guidelines, and answers to common task management questions.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm space-y-md">
          <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-primary">menu_book</span>
            Design Style Guidelines
          </h3>
          <p className="text-body-md text-on-surface-variant">
            Our visual language is modeled on Google’s design philosophy. Ensure all event posters and graphics use:
          </p>
          <ul className="list-disc pl-5 text-body-md text-on-surface-variant space-y-2">
            <li>Harmonious Google brand colors (Primary Blue, Success Green, Error Red).</li>
            <li>Fonts: <strong>Plus Jakarta Sans</strong> for headings and UI controls, <strong>Inter</strong> for labels and descriptions.</li>
            <li>Soft elevations and tonal containers instead of harsh black borders or shadows.</li>
            <li>Medium corner rounding radius of 12px for standard chips, input controls, and buttons.</li>
          </ul>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm space-y-md">
          <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-primary">help_center</span>
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-on-surface">
            <div>
              <h4 className="font-semibold">How do I add a new project?</h4>
              <p className="text-body-md text-on-surface-variant">Chapter leads can register new tasks inside the Admin Panel and assign them directly to registered members.</p>
            </div>
            <div>
              <h4 className="font-semibold">How are today's deadlines marked?</h4>
              <p className="text-body-md text-on-surface-variant">The dashboard calendar highlights today's date in blue, and list items with today's deadline are automatically tagged.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
