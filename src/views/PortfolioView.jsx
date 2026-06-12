import React, { useState, useMemo } from 'react';

export default function PortfolioView({ tasks }) {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const works = [
    { id: 1, name: 'Community Onboarding Flow', category: 'Web UI', date: 'June 12, 2024', icon: 'feed', colorClass: 'bg-primary-container/10 text-primary' },
    { id: 2, name: 'Speakers Announcement Post', category: 'Social Media', date: 'June 08, 2024', icon: 'campaign', colorClass: 'bg-secondary-container/20 text-secondary' },
    { id: 3, name: 'Flutter Workshop Poster', category: 'Event Poster', date: 'May 28, 2024', icon: 'brush', colorClass: 'bg-tertiary-container/10 text-tertiary' },
    { id: 4, name: 'Chapter Dashboard Icons', category: 'Web UI', date: 'May 15, 2024', icon: 'grid_view', colorClass: 'bg-primary-container/10 text-primary' }
  ];

  const filteredWorks = useMemo(() => {
    return works.filter(w => {
      const matchesMonth = selectedMonth === 'All' || w.date.includes(selectedMonth);
      const matchesCat = selectedCategory === 'All Categories' || w.category === selectedCategory;
      return matchesMonth && matchesCat;
    });
  }, [selectedMonth, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-gutter max-w-7xl mx-auto w-full space-y-xl">
        {/* Hero: Profile Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 relative overflow-hidden rounded-lg bg-primary text-on-primary p-xl flex items-end min-h-[320px]">
            <div className="relative z-10 space-y-md">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-md text-label-sm font-label-sm">GDG HIT Core Team</span>
              <h1 className="text-display-lg font-display-lg text-white">Alex Rivera</h1>
              <p className="text-title-lg font-title-lg opacity-90 max-w-md text-white">Lead Visual & UI Designer dedicated to building seamless developer experiences for the GDG community.</p>
              <div className="flex gap-md pt-4">
                <button className="bg-on-primary text-primary px-gutter py-2.5 rounded-md font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer" onClick={() => alert('Editing profile simulation')}>Edit Profile</button>
                <button className="border border-on-primary text-on-primary px-gutter py-2.5 rounded-md font-label-lg text-label-lg hover:bg-on-primary/10 transition-colors cursor-pointer" onClick={() => alert('Resume Download simulation')}>Download Resume</button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-lg p-lg border border-outline-variant shadow-sm flex flex-col justify-between">
            <h3 className="text-title-lg font-title-lg text-on-surface mb-lg">Lifetime Contributions</h3>
            <div className="space-y-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">task_alt</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Total Tasks</p>
                    <p className="text-headline-md font-headline-md text-on-surface">142</p>
                  </div>
                </div>
                <span className="text-secondary text-label-sm font-bold">+12% this month</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Designs Approved</p>
                    <p className="text-headline-md font-headline-md text-on-surface">108</p>
                  </div>
                </div>
                <span className="text-secondary text-label-sm font-bold">94% Approval Rate</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Canva Links Shared</p>
                    <p className="text-headline-md font-headline-md text-on-surface">32</p>
                  </div>
                </div>
                <span className="text-on-surface-variant text-label-sm">Across 4 Chapters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights: Bento Grid */}
        <section className="space-y-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-headline-md font-headline-md text-on-surface">Design Highlights</h2>
            <button className="text-primary font-label-lg flex items-center gap-sm cursor-pointer" onClick={() => alert('View All Works highlights')}>
              View All <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:h-[400px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcv-j-n_ZIY8KCmMnvT_7WLRrICSC8SEBaLILjr_OakYLUfBXkolaDUqJtNf6gL7XK77HfZxNIL9gOS1cYigrLxouQVgpee4lb_bDiu8ykSQTNWCcCeT9HCoVc8WovXVlH83GYOevwJJiX-07wwjDydl9ywwGKX92JkRwVGlSbNtWXOULdtXYgpmoRt76q4-9s_5ggt9mXbHtIIJXkaOQWMrWFcGESjqDjRDM_PCjoTMsSUwwXu_FcyfEEDmu4ZHta-3Ul8guabEtT" alt="GDG Portal"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-lg">
                <span className="text-white text-label-sm font-label-sm mb-xs">Web UI</span>
                <h4 className="text-white text-title-lg font-title-lg">GDG DevFest Portal 2024</h4>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-lg border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwd3cD9BY7pFtYjvUL4arL8uHyzTOlw_4BjMaJKZqxlafn4acYNJQl__4PE_EGGLU93zyeu8pVIwY5djLUIh7q1MD_XvQ3YnLwQVqndADfEbxyf7YTVtvytkOyhJaNhwy2C2UQgbhb8qZdIMsXEdH_PWhbB3gY5dVrZ1qODDFN0P-WiJ0B2u9Dfq_26TcPu_5I35iIko4Bd0QwEgTB4eUm5197h2MBkGe4VoBYdqSvokGUu1z_7HTC3x8TT_Yqe0zfKxvCnHOTdtjz" alt="Hackathon"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-md">
                <span className="text-white text-label-sm font-label-sm mb-xs">Social Media</span>
                <h4 className="text-white text-body-lg font-bold">Hackathon 2024 Socials</h4>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-lg border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNDsPxjYDMj1iYp0-CD3nkPS-q9exJtmJzgoshzmPG2ccHfU8M2g_tYI9t-goqaLJ3g0g1Lg63jYzIUb3-7vZtNiiHQK65JcfjSZWC4ZmR9p8ooCEFSKprhggtBIzzfbDZhoBTFSrFjLkazu1iXaYQhm0BfokwFR2o1PUr1fEK0g375rYrw5qRiQhUqbxHd2Kani71uqLdPXkKA0IKMb3FFLCO_HeXx47_fBMMAmQ-GOLYk_jiXi0rKoQplCOlHAFzyNGsHheXz-2" alt="Brand Guide"/>
            </div>
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-lg border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADm4VQbL71lshXQW7SIo-O2oV3XUWnulk30tuLkxfyWE6XsINt6XniiiFXQHy-SUnjM-HLfQob33tJbWMhX1wNXsd-9YufIBXD2O602yJhub2O9xpLW2zI5v5JYKPl2NygkZE6KWfo28Qr1cZllGbrskd3AJSiF8snlIhhDA-sMJRN-zRHnRH4T2TvI_gScKJyncC_XbYLv3tY_ePSgq8g3Yw8xlKXNSU4teOdIZYE4IVUzLE7RMqjhXZz_RFI6oP7GIJCHDBqknHj" alt="Icons"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-md">
                <span className="text-white text-label-sm font-label-sm mb-xs">Illustration</span>
                <h4 className="text-white text-title-lg font-title-lg">Custom Icon System v2.1</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Search/Filter & Works Table */}
        <section className="space-y-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
            <h2 className="text-headline-md font-headline-md text-on-surface">General Sheet</h2>
            <div className="flex items-center gap-sm overflow-x-auto pb-2 text-on-surface">
              <div className="flex bg-surface-container rounded-md p-1 shrink-0">
                <button className={`px-4 py-1.5 rounded-md text-label-lg font-label-lg cursor-pointer ${selectedMonth === 'All' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('All')}>All</button>
                <button className={`px-4 py-1.5 rounded-md text-label-lg font-label-lg cursor-pointer ${selectedMonth === 'May' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('May')}>May 2024</button>
                <button className={`px-4 py-1.5 rounded-md text-label-lg font-label-lg cursor-pointer ${selectedMonth === 'June' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('June')}>June 2024</button>
              </div>
              <select 
                className="bg-surface-container border-none rounded-md px-4 py-1.5 text-label-lg font-label-lg focus:ring-primary focus:outline-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All Categories</option>
                <option>Social Media</option>
                <option>Event Poster</option>
                <option>Web UI</option>
              </select>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low border-b border-outline-variant">
                <tr>
                  <th className="px-gutter py-4 text-label-lg font-label-lg text-on-surface-variant">Work Name</th>
                  <th className="px-gutter py-4 text-label-lg font-label-lg text-on-surface-variant">Category</th>
                  <th className="px-gutter py-4 text-label-lg font-label-lg text-on-surface-variant">Date</th>
                  <th className="px-gutter py-4 text-label-lg font-label-lg text-on-surface-variant text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filteredWorks.map((work) => (
                  <tr key={work.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-gutter py-4">
                      <div className="flex items-center gap-md">
                        <div className={`w-10 h-10 rounded-md flex items-center justify-center ${work.colorClass}`}>
                          <span className="material-symbols-outlined">{work.icon}</span>
                        </div>
                        <span className="text-body-lg font-medium text-on-surface">{work.name}</span>
                      </div>
                    </td>
                    <td className="px-gutter py-4">
                      <span className="bg-surface-container-high px-3 py-1 rounded-md text-label-sm font-label-sm text-on-surface-variant">{work.category}</span>
                    </td>
                    <td className="px-gutter py-4 text-body-md text-on-surface-variant">{work.date}</td>
                    <td className="px-gutter py-4 text-right">
                      <button className="text-primary hover:bg-primary-container/10 px-4 py-2 rounded-md font-label-lg transition-colors flex items-center gap-2 ml-auto cursor-pointer" onClick={() => alert(`Navigating to Canva workspace for ${work.name}`)}>
                        <span className="material-symbols-outlined text-sm">link</span> Design Link
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-gutter flex items-center justify-between border-t border-outline-variant text-on-surface">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Showing {filteredWorks.length} of {works.length} works</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-md border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_left</span></button>
                <button className="w-8 h-8 rounded-md bg-primary text-on-primary flex items-center justify-center font-bold">1</button>
                <button className="w-8 h-8 rounded-md border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-gutter border-t border-outline-variant mt-xxl text-center">
        <p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 GDG HIT Portal • Built for technical excellence</p>
      </footer>
    </div>
  );
}
