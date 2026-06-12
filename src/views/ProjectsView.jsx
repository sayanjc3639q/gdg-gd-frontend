import React, { useState } from 'react';

export default function ProjectsView({ projects }) {
  const [search, setSearch] = useState('');
  
  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.designer.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">Community Projects</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Explore design work and technical code repos contributed by chapter designers.</p>
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-md">
          <h3 className="font-title-lg text-title-lg text-on-surface">Projects Showcase</h3>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input 
              className="pl-10 pr-4 py-2 border border-outline-variant rounded-md text-sm bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-full sm:w-64" 
              placeholder="Search projects..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low font-label-lg text-label-lg text-on-surface-variant">
              <tr>
                <th className="px-6 py-4 font-semibold">Project Title</th>
                <th className="px-6 py-4 font-semibold">Designer / Owner</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Resource Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map((project) => (
                <tr key={project.id} className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg font-variation-settings: 'FILL' 1">folder</span>
                      </div>
                      <span className="font-body-lg text-on-surface font-semibold">{project.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{project.designer}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">
                    <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface-variant text-xs">{project.category}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-md text-xs font-label-sm ${project.status === 'Completed' ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary-container text-on-primary-container'}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <a className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2 rounded-md text-xs font-label-lg hover:bg-on-secondary-fixed-variant transition-colors cursor-pointer" href={project.link} target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Open Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
