import React, { useState } from 'react';

export default function ProfileView({ user, onUpdateUser, tasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const myTasks = tasks.filter(t => t.designer.toLowerCase().includes(user.name.toLowerCase()));

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      {/* Cover and Profile Intro Card */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
        <div className="h-32 md:h-48 bg-gradient-to-r from-primary to-primary-container relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        </div>
        <div className="px-6 pb-6 relative flex flex-col md:flex-row md:items-end gap-6 -mt-12 md:-mt-16">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-md bg-surface-container-low flex-shrink-0">
            <img alt={user.name} className="w-full h-full object-cover" src={user.avatar} />
          </div>
          <div className="flex-1 space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface font-headline-md tracking-tight leading-none">{user.name}</h2>
            <p className="text-primary font-medium text-sm font-label-lg">{user.role} • {user.dept} • {user.year}</p>
            <p className="text-xs text-on-surface-variant font-body-md">College Roll: {user.roll}</p>
          </div>
          <button 
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-md font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer self-start md:self-end"
            onClick={() => setIsEditing(!isEditing)}
          >
            <span className="material-symbols-outlined text-sm">{isEditing ? 'close' : 'edit'}</span>
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>
      </section>

      {/* Main Grid: Details & Bio vs Assigned Tasks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Left Column: Form / Info */}
        <div className="lg:col-span-7 space-y-lg">
          <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person</span>
              Profile Details
            </h3>

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Chapter Role</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">College Roll Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.roll}
                      onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Department</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.dept}
                      onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Year</label>
                    <select 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-label-lg cursor-pointer"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Biography</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-2 border border-outline rounded-md bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-body-md"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button 
                    type="button" 
                    className="px-5 py-2 border border-outline rounded-md text-on-surface-variant hover:bg-surface-variant transition-colors font-label-lg cursor-pointer"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 bg-primary text-on-primary rounded-md shadow-sm hover:shadow-md transition-all font-label-lg cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-on-surface">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">Biography</span>
                  <p className="text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-md italic">
                    "{user.bio || 'No biography details provided.'}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">Email</span>
                    <p className="text-body-md text-on-surface font-semibold">{user.email}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">Phone</span>
                    <p className="text-body-md text-on-surface font-semibold">{user.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-outline-variant">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">College Roll</span>
                    <p className="text-body-md text-on-surface font-semibold">{user.roll}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">Department / Year</span>
                    <p className="text-body-md text-on-surface font-semibold">{user.dept} ({user.year})</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Assigned Tasks list */}
        <div className="lg:col-span-5 space-y-lg">
          <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">assignment</span>
              Assigned Deadlines ({myTasks.length})
            </h3>
            {myTasks.length > 0 ? (
              <div className="space-y-3">
                {myTasks.map((t) => (
                  <div key={t.id} className="flex justify-between items-center p-4 rounded-md bg-surface-container-low border border-outline-variant/50 hover:bg-surface-container-high transition-colors">
                    <div>
                      <h4 className="font-semibold text-on-surface text-sm">{t.name}</h4>
                      <p className="text-xs text-on-surface-variant">Deadline: {t.month} {t.day}</p>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold ${t.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'}`}>{t.status}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-surface-container-low rounded-md border border-dashed border-outline-variant">
                <span className="material-symbols-outlined text-outline text-3xl mb-2">assignment_turned_in</span>
                <p className="text-sm text-on-surface-variant">All caught up! No active tasks assigned.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
