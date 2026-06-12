import React, { useState, useMemo } from 'react';

export default function MembersDirectoryView({ designers, setDesigners }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDept, setActiveDept] = useState('All');
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeStatus, setActiveStatus] = useState('Any Status');

  const filteredDesigners = useMemo(() => {
    return designers.filter(des => {
      const matchesSearch = des.name.toLowerCase().includes(searchQuery.toLowerCase()) || des.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = activeDept === 'All' || des.dept === activeDept;
      const matchesYear = activeYear === 'All Years' || des.year === activeYear;
      const matchesStatus = activeStatus === 'Any Status' || des.status === activeStatus;
      return matchesSearch && matchesDept && matchesYear && matchesStatus;
    });
  }, [designers, searchQuery, activeDept, activeYear, activeStatus]);

  const activeCount = designers.filter(d => d.status === 'Active').length;
  const busyCount = designers.filter(d => d.status === 'Busy').length;

  return (
    <main className="flex-1 p-xl min-h-screen">
      <div className="max-w-7xl mx-auto space-y-xl">
        {/* Page Header & Global Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface">Team Directory</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Manage and organize your visual design collective and engineering talent.</p>
          </div>
          <div className="flex items-center gap-md">
            <button className="flex items-center gap-sm px-lg h-11 border border-primary text-primary rounded-md font-label-lg hover:bg-primary-container/10 transition-colors cursor-pointer" onClick={() => alert('CSV Export simulated')}>
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>
          </div>
        </div>

        {/* Advanced Filters Section - 16px radius (rounded-lg) */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-md">
          <div className="md:col-span-2 bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex items-center gap-lg">
            <div className="flex-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Filter by Department</label>
              <div className="flex flex-wrap gap-xs">
                {['All', 'CSE', 'IT', 'ECE', 'EE'].map((dept) => (
                  <button 
                    key={dept} 
                    onClick={() => setActiveDept(dept)}
                    className={`px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-colors cursor-pointer border ${activeDept === dept ? 'bg-primary border-primary text-on-primary' : 'bg-surface-container border-outline-variant text-on-surface hover:bg-surface-container-high'}`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex items-center gap-lg">
            <div className="flex-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Filter by Year</label>
              <div className="flex flex-wrap gap-xs">
                {['All Years', '1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
                  <button 
                    key={year} 
                    onClick={() => setActiveYear(year)}
                    className={`px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-colors cursor-pointer border ${activeYear === year ? 'bg-primary border-primary text-on-primary' : 'bg-surface-container border-outline-variant text-on-surface hover:bg-surface-container-high'}`}
                  >
                    {year.slice(0,3)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex items-center gap-lg">
            <div className="flex-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Status Indicators</label>
              <div className="flex flex-wrap gap-xs">
                {['Any Status', 'Active', 'Busy', 'On Leave'].map((status) => (
                  <button 
                    key={status} 
                    onClick={() => setActiveStatus(status)}
                    className={`px-2 py-1 rounded-md font-label-sm text-label-sm transition-colors cursor-pointer border ${activeStatus === status ? 'bg-primary border-primary text-on-primary' : 'bg-surface-container border-outline-variant text-on-surface hover:bg-surface-container-high'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search & Overview Statistics */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div className="relative w-full md:max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 border border-outline rounded-md text-sm bg-surface-container-lowest text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
              placeholder="Search by name, role or skill..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-md">
            <span className="flex items-center gap-sm bg-secondary-container/20 text-on-secondary-container px-4 py-2 rounded-md font-label-sm text-label-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              {activeCount} Active
            </span>
            <span className="flex items-center gap-sm bg-primary-container/20 text-on-primary-container px-4 py-2 rounded-md font-label-sm text-label-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              {busyCount} Busy
            </span>
          </div>
        </section>

        {/* Designers Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {filteredDesigners.map((des) => (
            <div 
              key={des.id} 
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-md">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant">
                    <img alt={des.name} className="w-full h-full object-cover" src={des.avatar} />
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${des.status === 'Active' ? 'bg-secondary-container border-secondary/20 text-on-secondary-container' : des.status === 'Busy' ? 'bg-primary-container border-primary/20 text-on-primary-container' : 'bg-surface-variant border-outline-variant/30 text-on-surface-variant'}`}>
                    {des.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg text-on-surface font-bold truncate">{des.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">{des.role}</p>
                </div>
                <div className="flex flex-wrap gap-xs pt-1">
                  <span className="px-sm py-xs bg-secondary-container text-on-secondary-container rounded-md text-label-sm font-label-sm">{des.dept}</span>
                  <span className="px-sm py-xs bg-surface-container-high text-on-surface-variant rounded-md text-label-sm font-label-sm">{des.year}</span>
                </div>
                <div className="pt-2 space-y-1.5 text-xs text-on-surface-variant font-body-md border-t border-outline-variant/50">
                  <p className="flex items-center gap-2 truncate">
                    <span className="material-symbols-outlined text-[14px]">mail</span>
                    {des.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">call</span>
                    {des.phone}
                  </p>
                </div>
              </div>
              <button 
                className="mt-lg w-full py-2 bg-surface-container hover:bg-surface-container-high rounded-md text-xs font-label-lg text-on-surface transition-colors cursor-pointer"
                onClick={() => alert(`Opening profile portfolio of ${des.name}`)}
              >
                View Works
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
