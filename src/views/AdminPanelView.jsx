import React, { useState, useMemo } from 'react';

export default function AdminPanelView({ members, setMembers }) {
  const [adminSearchQuery, setAdminSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All'); // 'All' | 'Active' | 'Inactive'
  
  // Add Member Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMemberForm, setNewMemberForm] = useState({
    name: '',
    email: '',
    role: 'Developer',
    status: 'Active',
    roll: '',
    dept: 'CSE',
    phone: '',
    year: '1st Year'
  });

  const filteredMembers = useMemo(() => {
    return members.filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
                            m.role.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
                            m.dept.toLowerCase().includes(adminSearchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || m.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [members, adminSearchQuery, statusFilter]);

  const handleDeleteMember = (id) => {
    if (confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleEditMember = (id) => {
    const memberToEdit = members.find(m => m.id === id);
    if (!memberToEdit) return;
    
    const newRole = prompt('Enter new role for member:', memberToEdit.role);
    if (newRole) {
      setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
    }
  };

  const handleAddMemberSubmit = (e) => {
    e.preventDefault();
    if (!newMemberForm.name || !newMemberForm.email) return;

    const newMember = {
      id: Date.now(),
      ...newMemberForm,
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '4-digit' })
    };

    setMembers([...members, newMember]);
    setIsAddModalOpen(false);
    setNewMemberForm({
      name: '',
      email: '',
      role: 'Developer',
      status: 'Active',
      roll: '',
      dept: 'CSE',
      phone: '',
      year: '1st Year'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Search Bar */}
      <header className="sticky top-0 z-10 flex justify-between items-center w-full px-lg py-sm bg-surface-container-lowest shadow-sm">
        <div className="flex items-center gap-xl flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full pl-12 pr-md py-2 bg-surface-container-low border-none rounded-md font-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary outline-none" 
              placeholder="Search members, roles or status..." 
              type="text"
              value={adminSearchQuery}
              onChange={(e) => setAdminSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-xl space-y-xl">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Team Management</h2>
            <p className="font-body-md text-on-surface-variant">View and manage all active members of the GDG on Campus HIT chapter.</p>
          </div>
          <div className="flex items-center gap-md">
            <button className="flex items-center gap-sm px-lg py-2 bg-surface-container-highest text-on-surface rounded-md font-label-lg text-label-lg hover:bg-surface-variant transition-colors cursor-pointer" onClick={() => alert('Filter applied')}>
              <span className="material-symbols-outlined">filter_list</span>
              Filter
            </button>
            <button 
              className="flex items-center gap-sm px-lg py-2 bg-primary text-on-primary rounded-md font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm active:scale-95 cursor-pointer font-bold" 
              onClick={() => setIsAddModalOpen(true)}
            >
              <span className="material-symbols-outlined">person_add</span>
              Add New Member
            </button>
          </div>
        </section>

        {/* Bento Layout Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="bg-surface-container-lowest p-lg rounded-lg shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Total Members</p>
            <h3 className="font-display-lg text-headline-md text-primary mt-sm">{members.length}</h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="font-label-sm">+12% this month</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-lg shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Chapter Leads</p>
            <h3 className="font-display-lg text-headline-md text-tertiary mt-sm">
              {members.filter(m => m.role === 'Chapter Lead').length}
            </h3>
            <div className="mt-md flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              <span className="font-label-sm">Core team members</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-lg shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Active Developers</p>
            <h3 className="font-display-lg text-headline-md text-secondary mt-sm">
              {members.filter(m => m.role === 'Developer' && m.status === 'Active').length}
            </h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">code</span>
              <span className="font-label-sm">4 open projects</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-lg shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">System Status</p>
            <h3 className="font-display-lg text-headline-md text-on-surface mt-sm">Healthy</h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="font-label-sm">Updated 2m ago</span>
            </div>
          </div>
        </section>

        {/* Members Table Card */}
        <div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="p-lg border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright">
            <h3 className="font-title-lg text-title-lg text-on-surface">Member Directory</h3>
            {/* Interactive Status Tabs */}
            <div className="flex gap-sm">
              <button 
                className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm cursor-pointer transition-all ${statusFilter === 'All' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
                onClick={() => setStatusFilter('All')}
              >
                All ({members.length})
              </button>
              <button 
                className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm cursor-pointer transition-all ${statusFilter === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
                onClick={() => setStatusFilter('Active')}
              >
                Active ({members.filter(m => m.status === 'Active').length})
              </button>
              <button 
                className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm cursor-pointer transition-all ${statusFilter === 'Inactive' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
                onClick={() => setStatusFilter('Inactive')}
              >
                Inactive ({members.filter(m => m.status === 'Inactive').length})
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-lg py-md text-left font-label-lg text-on-surface-variant border-b border-outline-variant/10">Member Name</th>
                  <th className="px-lg py-md text-left font-label-lg text-on-surface-variant border-b border-outline-variant/10">Role</th>
                  <th className="px-lg py-md text-left font-label-lg text-on-surface-variant border-b border-outline-variant/10">Status</th>
                  <th className="px-lg py-md text-left font-label-lg text-on-surface-variant border-b border-outline-variant/10">Join Date</th>
                  <th className="px-lg py-md text-right font-label-lg text-on-surface-variant border-b border-outline-variant/10">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filteredMembers.map((m) => (
                  <tr key={m.id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                          {m.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-body-lg font-semibold text-on-surface">{m.name}</p>
                          <p className="font-label-sm text-on-surface-variant">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <span className={`px-md py-xs rounded-full font-label-sm text-label-sm ${m.role === 'Chapter Lead' ? 'bg-primary-fixed text-on-primary-fixed-variant' : m.role === 'Designer' ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'}`}>
                        {m.role}
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-sm">
                        <span className={`w-2 h-2 rounded-full ${m.status === 'Active' ? 'bg-secondary' : 'bg-outline'}`}></span>
                        <span className="font-body-md text-on-surface">{m.status}</span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-on-surface-variant">{m.joinDate}</td>
                    <td className="px-lg py-md text-right">
                      <button className="p-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onClick={() => handleEditMember(m.id)}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-sm text-on-surface-variant hover:text-error transition-colors cursor-pointer" onClick={() => handleDeleteMember(m.id)}>
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-lg bg-surface-container-low/30 border-t border-outline-variant/10 flex justify-between items-center">
            <p className="font-label-sm text-on-surface-variant">Showing {filteredMembers.length} of {members.length} members</p>
            <div className="flex gap-sm text-on-surface">
              <button className="px-md py-sm rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors font-label-lg disabled:opacity-50" disabled>Previous</button>
              <button className="px-md py-sm rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors font-label-lg cursor-pointer">Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Add New Member Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <div 
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative z-50 bg-surface-container-lowest w-full max-w-lg rounded-lg shadow-2xl overflow-hidden transition-all">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Add New Member</h3>
              <button 
                className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full text-on-surface-variant cursor-pointer" 
                onClick={() => setIsAddModalOpen(false)}
              >
                close
              </button>
            </div>
            <form className="p-6 space-y-md" onSubmit={handleAddMemberSubmit}>
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Full Name</label>
                <input 
                  className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
                  placeholder="e.g. John Doe" 
                  type="text" 
                  value={newMemberForm.name}
                  onChange={(e) => setNewMemberForm({ ...newMemberForm, name: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Email Address</label>
                <input 
                  className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
                  placeholder="name@gdghit.com" 
                  type="email" 
                  value={newMemberForm.email}
                  onChange={(e) => setNewMemberForm({ ...newMemberForm, email: e.target.value })}
                  required
                />
              </div>

              {/* Role & Status */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Role</label>
                  <select 
                    className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
                    value={newMemberForm.role}
                    onChange={(e) => setNewMemberForm({ ...newMemberForm, role: e.target.value })}
                  >
                    <option value="Chapter Lead">Chapter Lead</option>
                    <option value="Designer">Designer</option>
                    <option value="Developer">Developer</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Status</label>
                  <select 
                    className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
                    value={newMemberForm.status}
                    onChange={(e) => setNewMemberForm({ ...newMemberForm, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Department, Roll, and Year */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Dept</label>
                  <select 
                    className="w-full px-2 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface text-xs font-label-lg"
                    value={newMemberForm.dept}
                    onChange={(e) => setNewMemberForm({ ...newMemberForm, dept: e.target.value })}
                  >
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EE">EE</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Roll Number</label>
                  <input 
                    className="w-full px-2 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-transparent text-on-surface text-xs font-body-md" 
                    placeholder="120200..." 
                    type="text" 
                    value={newMemberForm.roll}
                    onChange={(e) => setNewMemberForm({ ...newMemberForm, roll: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Year</label>
                  <select 
                    className="w-full px-2 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface text-xs font-label-lg"
                    value={newMemberForm.year}
                    onChange={(e) => setNewMemberForm({ ...newMemberForm, year: e.target.value })}
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Phone Number</label>
                <input 
                  className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
                  placeholder="+91 99999-88888" 
                  type="text" 
                  value={newMemberForm.phone}
                  onChange={(e) => setNewMemberForm({ ...newMemberForm, phone: e.target.value })}
                />
              </div>

              {/* Actions */}
              <div className="pt-4 flex gap-3">
                <button 
                  className="flex-1 px-6 py-2.5 border border-outline-variant rounded-md font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer" 
                  onClick={() => setIsAddModalOpen(false)} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 px-6 py-2.5 bg-primary text-on-primary rounded-md font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer font-bold" 
                  type="submit"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
