import React, { useState, useMemo } from 'react';
import gdgLogo from './assets/gdg-logo.png';

// Main Application Component
export default function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login' | 'dashboard' | 'members' | 'admin'
  const [currentUser, setCurrentUser] = useState({
    name: 'Alex Rivera',
    role: 'UI/UX Designer',
    roll: '12020004012',
    dept: 'CSE',
    email: 'alex.rivera@gdghit.org',
    phone: '+91 98765-43210',
    year: '3rd Year',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAii0Aw_3PziQvnv4m2zOpcpJ9J-dUW9iCQ4vkNy-IiPIUgevo78bYt_QwerGYp86KyFu2KdT-oshe11BhwvHRgyodsJjX_pF_ePy8iPIQc6xsF3AUU7UG-j6PzLIXnxETHGycKbWld4OHrBQzFw1noqQTI90aTAZnppL0uJYjL-GXnKXuRqacxMLPfnCxsdq0DAq4R1dEKGGVvKJOc7ely5jVKirZ_4XiWJIJZPQlfgGcY5XiVFKNK_XrKOgLp8vHO5DAxu4PJg-A9',
    bio: 'Passionate UI/UX designer crafting clean and user-friendly digital experiences for Google Developer Groups On Campus HIT.'
  });
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Android Compose Workshop', designer: 'Alex Johnson', coDesigner: 'Sam Chen', assist: 'Rita Ora', status: 'Active', month: 'June', day: 24, type: 'code' },
    { id: 2, name: 'ML Marathon', designer: 'Priya Singh', coDesigner: 'Kunal Shah', assist: '-', status: 'Draft', month: 'June', day: 12, type: 'psychology' },
    { id: 3, name: 'HACK-HIT 2024', designer: 'Team Creative', coDesigner: 'Arjun V.', assist: 'All Leads', status: 'In Review', month: 'June', day: 28, type: 'rocket_launch' }
  ]);

  const [members, setMembers] = useState([
    { id: 1, name: 'Alex Sharma', email: 'alex.sharma@gdghit.com', role: 'Chapter Lead', status: 'Active', joinDate: 'Oct 12, 2023', roll: '12020004010', dept: 'CSE', phone: '+91 98765-43210', year: '3rd Year' },
    { id: 2, name: 'Meera Patel', email: 'meera.p@gdghit.com', role: 'Designer', status: 'Active', joinDate: 'Nov 05, 2023', roll: '12020004055', dept: 'IT', phone: '+91 91234-56789', year: '2nd Year' },
    { id: 3, name: 'John Doe', email: 'john.doe@gdghit.com', role: 'Developer', status: 'Inactive', joinDate: 'Jan 15, 2024', roll: '12020004098', dept: 'ECE', phone: '+91 88888-77777', year: '4th Year' },
    { id: 4, name: 'Rohan Verma', email: 'rohan.v@gdghit.com', role: 'Marketing', status: 'Active', joinDate: 'Feb 22, 2024', roll: '12020004112', dept: 'CSE', phone: '+91 70000-11111', year: '1st Year' }
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: 'GDG DevFest Portal 2024', designer: 'Alex Rivera', link: 'https://figma.com', category: 'Web UI', status: 'Completed' },
    { id: 2, title: 'ML Marathon Banner', designer: 'Priya Singh', link: 'https://canva.com', category: 'Social Media', status: 'Completed' },
    { id: 3, title: 'Compose Camp Poster', designer: 'Samantha Chen', link: 'https://canva.com', category: 'Event Poster', status: 'In Progress' },
    { id: 4, title: 'HIT Solution Challenge Hub', designer: 'Marcus Thorne', link: 'https://github.com', category: 'Web Application', status: 'Completed' }
  ]);

  const [designers, setDesigners] = useState([
    { id: 1, name: 'Alex Rivera', role: 'UI/UX Designer', roll: '12020004012', dept: 'CSE', email: 'alex.rivera@gdghit.org', phone: '+91 98765-43210', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6EzTZdokZJlCx9SIQu6j4deC-J86CkCVjYZQeKVnBQythS7LBqpShn1W14BnuOm2Z2APf_k8JUzsCakg5pUQf7wNkQ4Ow7D_oGUmf0QzqEwbommMkmNnTCLSX0UAU0w4o43OL5yMHzTl8zxomfWDWV1gcavHWpVOx7QbnwrtwzCAJVt9brOEVaR_UO_YfCKAq4hVXHPlvwefl3noBgJpP4h6faVZKYiQSgJYjpqJudhk4Ecq9ZR9bB9YOHPKTYE8mlvBujvb0dqw', year: '3rd Year' },
    { id: 2, name: 'Samantha Chen', role: 'Lead Illustrator', roll: '12020004055', dept: 'IT', email: 's.chen@gdghit.org', phone: '+91 91234-56789', status: 'Busy', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoi1B0h5wNNp-mtLE25w2YPBb8FCkeOHaY-7jeh2srdg_E_BmZ_SowlqKfzYGiIiUDnvWpa39-QwwGLTs5ahbtzcXajV7TedK0PSsWg-iv0IUxHgRUc0DgCVqvdnfcaVw-B-sxn_gTWefXxotmUVrPiQ3lImRS8_VWmQhP66G0QUk51QugbbGTRW54y-S4DAjbmEIqGa3AGD5Lbt1wJw72UpmNsyu7ztI2nMcGXTW0KPdWNfk3e-EWXvju_-MWYkRPiWzthFGg0QTV', year: '3rd Year' },
    { id: 3, name: 'Marcus Thorne', role: 'Interaction Designer', roll: '12020004098', dept: 'ECE', email: 'marcus.t@gdghit.org', phone: '+91 88888-77777', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGB_mdEhyh9rEexAEGZz9HWyDOAh56de8rA_5d0fPYZSKXxVV1Z8jq1Xm62VlvURDAz1iC6XVoIe7hZis7VVDxRhzpZsEzaW8vzJB9fPxL2a9INALL47QK3x6dUFq94m1rvPVTpyrsmhoLgKSgxv1HvXPShd7m5llBWxoY1nvPd_mtngoxertNINNZ3JzAjKuNISXfJm1EYzM_ehqWqXQr5_YB1bEcjrUPodukw26mzk9jQPqkzLMGvD_51POC4Rj9V5Sk-Pbk7XMw', year: '2nd Year' },
    { id: 4, name: 'Priya Sharma', role: 'Product Designer', roll: '12020004112', dept: 'CSE', email: 'priya.s@gdghit.org', phone: '+91 70000-11111', status: 'On Leave', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnrtISFzjvBuQOEYoMQw6Z9ov9Iwg6Cb6UvvOp4eJZizMtXcd0gmqQjgyl394o3q3GG7oYTDn3ulVyHlsG-g0P3F4RVluBC08-8oKnwfa1GV3X1DF2qqAB7yArJ25cvvtSOwe1dLEP4-luEqgdwRYITvuL7axtz-EeMc9CYAw5Wf_7VwDdhbfJklUhkLKF-VsOQgqxIMAY81JELDWrHdBK1asSXagKlC_NDkk6rKRJYBOUsjds0oXOmAz2wzLOQ1xSs0HSWB1_mBgC', year: '4th Year' }
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Notifications popup simulated list
  const [notifications, setNotifications] = useState([
    'New task assigned to Sam Chen',
    'ML Marathon Poster draft is ready for review',
    'Alex Rivera updated their resume'
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Add/Edit Task Form inputs
  const [editingTask, setEditingTask] = useState(null);
  const [taskForm, setTaskForm] = useState({
    name: '',
    designer: 'Alex Rivera',
    coDesigner: '-',
    assist: '-',
    status: 'Active',
    month: 'June',
    day: 1,
    type: 'code'
  });

  const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    if (!taskForm.name) return;

    if (editingTask) {
      // Editing mode
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...taskForm } : t));
    } else {
      // Adding mode
      const newTask = {
        id: Date.now(),
        ...taskForm,
        day: parseInt(taskForm.day) || 1
      };
      setTasks([...tasks, newTask]);
    }
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(t => t.id !== taskId));
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setTaskForm({
      name: task.name,
      designer: task.designer,
      coDesigner: task.coDesigner,
      assist: task.assist,
      status: task.status,
      month: task.month,
      day: task.day,
      type: task.type || 'code'
    });
    setModalOpen(true);
  };

  const handleAddTaskClick = () => {
    setEditingTask(null);
    setTaskForm({
      name: '',
      designer: designers[0]?.name || 'Alex Rivera',
      coDesigner: '-',
      assist: '-',
      status: 'Active',
      month: 'June',
      day: new Date().getDate(),
      type: 'code'
    });
    setModalOpen(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Navigations Handler
  const navigateTo = (view) => {
    if (view === 'login') {
      setIsLoggedIn(false);
    }
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  if (!isLoggedIn) {
    if (currentView === 'terms') {
      return <TermsView onBack={() => setCurrentView('login')} isLoggedIn={false} />;
    }
    if (currentView === 'privacy') {
      return <PrivacyView onBack={() => setCurrentView('login')} isLoggedIn={false} />;
    }
    return (
      <LoginView 
        onLogin={() => {
          setIsLoggedIn(true);
          setCurrentView('dashboard');
        }} 
        onNavigate={setCurrentView}
      />
    );
  }

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Shared Header / TopNavBar */}
      <TopNavBar 
        currentView={currentView}
        onNavigate={navigateTo} 
        notifications={notifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="flex">
        {/* Shared SideNavBar */}
        <SideNavBar 
          currentView={currentView} 
          onNavigate={navigateTo} 
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        {/* Main Workspace Frame */}
        <div className="flex-1 min-h-[calc(100vh-64px)]">
          {currentView === 'dashboard' && (
            <DashboardView 
              tasks={tasks} 
              onAddTaskClick={handleAddTaskClick} 
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              navigateTo={navigateTo}
            />
          )}

          {currentView === 'members' && (
            <MembersDirectoryView 
              designers={designers} 
              setDesigners={setDesigners}
            />
          )}

          {currentView === 'admin' && (
            <AdminPanelView 
              members={members} 
              setMembers={setMembers}
              onAddMemberClick={() => alert('Add Member flow initiated.')}
            />
          )}

          {currentView === 'projects' && (
            <ProjectsView 
              projects={projects}
            />
          )}

          {currentView === 'help' && (
            <HelpView />
          )}

          {currentView === 'settings' && (
            <SettingsView />
          )}

          {currentView === 'terms' && (
            <TermsView isLoggedIn={true} />
          )}

          {currentView === 'profile' && (
            <ProfileView 
              user={currentUser} 
              onUpdateUser={setCurrentUser} 
              tasks={tasks}
            />
          )}

          {currentView === 'privacy' && (
            <PrivacyView isLoggedIn={true} />
          )}
        </div>
      </div>

      {/* Task Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" onClick={() => { setModalOpen(false); setEditingTask(null); }}></div>
          <div className="relative bg-surface-container-lowest w-full max-w-lg rounded-[28px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {editingTask ? 'Edit Task / Event' : 'New Task / Event'}
              </h3>
              <button className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full text-on-surface-variant cursor-pointer" onClick={() => { setModalOpen(false); setEditingTask(null); }}>close</button>
            </div>
            <form className="p-6 space-y-md" onSubmit={handleTaskFormSubmit}>
              {/* Name field */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Task / Event Name</label>
                <input 
                  className="w-full px-4 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
                  placeholder="e.g. Workshop Poster" 
                  type="text" 
                  value={taskForm.name}
                  onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
                  required
                />
              </div>

              {/* Month & Day fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Month</label>
                  <select 
                    className="w-full px-4 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
                    value={taskForm.month}
                    onChange={(e) => setTaskForm({ ...taskForm, month: e.target.value })}
                  >
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Deadline Day (1-31)</label>
                  <input 
                    className="w-full px-4 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
                    max="31" 
                    min="1" 
                    type="number"
                    value={taskForm.day}
                    onChange={(e) => setTaskForm({ ...taskForm, day: parseInt(e.target.value) || 1 })}
                    required
                  />
                </div>
              </div>

              {/* Roles: Designer, Co-designer, Assist */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Designer</label>
                  <select 
                    className="w-full px-3 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface text-xs font-label-lg"
                    value={taskForm.designer}
                    onChange={(e) => setTaskForm({ ...taskForm, designer: e.target.value })}
                  >
                    {designers.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                    <option value="Alex Johnson">Alex Johnson</option>
                    <option value="Jane Smith">Jane Smith</option>
                    <option value="Sam Chen">Sam Chen</option>
                    <option value="Priya Singh">Priya Singh</option>
                    <option value="-">-</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Co-designer</label>
                  <input 
                    className="w-full px-3 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-transparent text-on-surface text-xs font-body-md" 
                    type="text" 
                    value={taskForm.coDesigner}
                    onChange={(e) => setTaskForm({ ...taskForm, coDesigner: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Assist</label>
                  <input 
                    className="w-full px-3 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-transparent text-on-surface text-xs font-body-md" 
                    type="text" 
                    value={taskForm.assist}
                    onChange={(e) => setTaskForm({ ...taskForm, assist: e.target.value })}
                  />
                </div>
              </div>

              {/* Status and Icon Category */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Status</label>
                  <select 
                    className="w-full px-4 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
                    value={taskForm.status}
                    onChange={(e) => setTaskForm({ ...taskForm, status: e.target.value })}
                  >
                    <option>Active</option>
                    <option>Draft</option>
                    <option>In Review</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Icon Type</label>
                  <select 
                    className="w-full px-4 py-2 border border-outline rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
                    value={taskForm.type}
                    onChange={(e) => setTaskForm({ ...taskForm, type: e.target.value })}
                  >
                    <option value="code">Code Icon</option>
                    <option value="brush">Brush Icon</option>
                    <option value="psychology">ML Icon</option>
                    <option value="rocket_launch">Rocket Icon</option>
                    <option value="event">Event Icon</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex gap-3">
                <button 
                  className="flex-1 px-6 py-2.5 border border-outline-variant rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer" 
                  onClick={() => { setModalOpen(false); setEditingTask(null); }} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer font-bold" 
                  type="submit"
                >
                  {editingTask ? 'Save Changes' : 'Create Task'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// 1. LOGIN COMPONENT
function LoginView({ onLogin, onNavigate }) {
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
        {/* Login Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-[28px] p-xl elevation-1">
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
          {/* Primary Action: Sign in with Google */}
          <button onClick={onLogin} className="w-full h-12 flex items-center justify-center gap-md bg-surface-container-lowest border border-outline-variant rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 active:scale-[0.98]">
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
                <input 
                  className="w-full h-14 px-md rounded-xl border border-outline-variant bg-transparent font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant" 
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
                <input 
                  className="w-full h-14 px-md rounded-xl border border-outline-variant bg-transparent font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant" 
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
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" 
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
            <button className="w-full h-14 bg-primary text-on-primary rounded-full font-label-lg text-label-lg hover:shadow-lg hover:opacity-90 transition-all duration-300 active:scale-[0.98] mt-md" type="submit">
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
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer" onClick={() => onNavigate('privacy')}>Privacy Policy</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer" onClick={() => onNavigate('terms')}>Terms &amp; Conditions</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors cursor-pointer" onClick={() => alert('Please sign in to access the full Help Center.')}>Help Center</button>
        </footer>
      </main>
    </div>
  );
}

// 2. SHARED TOPBAR COMPONENT
function TopNavBar({ currentView, onNavigate, notifications, showNotifications, setShowNotifications }) {
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
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors text-left" onClick={() => { onNavigate('profile'); setProfileMenuOpen(false); }}>
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

// 3. SHARED SIDEBAR COMPONENT
function SideNavBar({ currentView, onNavigate, mobileOpen, setMobileOpen }) {
  const links = [
    { name: 'Dashboard', icon: 'dashboard', view: 'dashboard' },
    { name: 'Team Directory', icon: 'groups', view: 'members' },
    { name: 'Projects', icon: 'folder', view: 'projects' },
    { name: 'Admin Panel', icon: 'admin_panel_settings', view: 'admin' },
  ];

  return (
    <>
      {/* Mobile Drawer Trigger (FAB bottom left or toggle in header) */}
      <button 
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-primary text-on-primary shadow-xl z-50 flex items-center justify-center md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
      </button>

      <aside className={`fixed md:sticky top-16 left-0 h-[calc(100vh-64px)] z-40 bg-surface-container-low border-r border-outline-variant w-64 flex flex-col p-4 transition-transform duration-300 md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:flex'}`}>
        <nav className="flex-grow space-y-1">
          {links.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button 
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full active:scale-95 transition-all duration-150 text-left ${isActive ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{link.icon}</span>
                {link.name}
              </button>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-outline-variant pt-4 space-y-1">
          <button className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full transition-all text-left ${currentView === 'help' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`} onClick={() => onNavigate('help')}>
            <span className="material-symbols-outlined">help</span> Help
          </button>
          <button className={`w-full flex items-center gap-4 px-4 py-3 font-label-lg text-label-lg rounded-full transition-all text-left ${currentView === 'settings' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-surface-variant'}`} onClick={() => onNavigate('settings')}>
            <span className="material-symbols-outlined">settings</span> Settings
          </button>
          <button className="w-full flex items-center gap-4 text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-variant rounded-full transition-all text-left" onClick={() => onNavigate('login')}>
            <span className="material-symbols-outlined text-error">logout</span> Logout
          </button>
        </div>
      </aside>
    </>
  );
}

// 4. DASHBOARD VIEW
function DashboardView({ tasks, onAddTaskClick, navigateTo, onEditTask, onDeleteTask }) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date()); // Initialize to actual current date (e.g. June 2026)
  const [taskFilter, setTaskFilter] = useState('');

  const activeMonth = currentCalendarDate.getMonth();
  const activeYear = currentCalendarDate.getFullYear();

  // Find task deadlines for current month/year view
  const currentMonthDeadlines = useMemo(() => {
    return tasks.filter(t => t.month === months[activeMonth]);
  }, [tasks, activeMonth]);

  // Calendar Days calculations
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(activeYear, activeMonth, 1).getDay();
    const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
    
    const days = [];
    
    // Fill empty spots for previous month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ dayNumber: null, isDummy: true });
    }
    
    // Fill actual month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDeadlines = currentMonthDeadlines.filter(t => t.day === day);
      days.push({
        dayNumber: day,
        isDummy: false,
        deadlines: dayDeadlines,
        isToday: day === new Date().getDate() && activeMonth === new Date().getMonth() && activeYear === new Date().getFullYear()
      });
    }
    
    return days;
  }, [activeMonth, activeYear, currentMonthDeadlines]);

  const changeMonth = (offset) => {
    const newDate = new Date(activeYear, activeMonth + offset, 1);
    setCurrentCalendarDate(newDate);
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter(t => 
      t.name.toLowerCase().includes(taskFilter.toLowerCase()) ||
      t.designer.toLowerCase().includes(taskFilter.toLowerCase()) ||
      t.status.toLowerCase().includes(taskFilter.toLowerCase())
    );
  }, [tasks, taskFilter]);

  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl">
      {/* Hero Header Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight">GDG Task Hub</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Manage events, track poster design deadlines, and coordinate with the creative team at HIT.</p>
        </div>
        <button 
          className="flex items-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md active:scale-95 transition-all w-fit" 
          onClick={onAddTaskClick}
        >
          <span className="material-symbols-outlined">add</span>
          Add Event / Task
        </button>
      </section>

      {/* Calendar Bento Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Large Calendar Container */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xxl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="font-title-lg text-title-lg text-on-surface">{months[activeMonth]} {activeYear}</h3>
              <div className="flex items-center gap-2">
                <button className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface" onClick={() => changeMonth(-1)}>chevron_left</button>
                <button className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface" onClick={() => changeMonth(1)}>chevron_right</button>
              </div>
            </div>
            <button 
              className="px-4 py-2 text-primary font-label-lg text-label-lg hover:bg-primary-container/10 rounded-full transition-colors"
              onClick={() => setCurrentCalendarDate(new Date())}
            >
              Today
            </button>
          </div>
          <div className="p-4 flex-grow overflow-x-auto custom-scrollbar">
            <div className="min-w-[600px]">
              <div className="calendar-grid mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                  <div key={dayName} className="text-center font-label-sm text-label-sm text-on-surface-variant py-2 uppercase tracking-widest">{dayName}</div>
                ))}
              </div>
              <div className="calendar-grid calendar-transition">
                {calendarDays.map((cell, index) => {
                  if (cell.isDummy) {
                    return (
                      <div key={index} className="h-24 md:h-32 border-[0.5px] border-outline-variant/30 opacity-20"></div>
                    );
                  }
                  return (
                    <div 
                      key={index}
                      className={`h-24 md:h-32 border-[0.5px] border-outline-variant/30 p-2 relative group hover:bg-surface-container-high transition-colors cursor-pointer ${cell.isToday ? 'bg-primary-container/10' : ''}`}
                    >
                      <span className={`font-label-sm text-label-sm ${cell.isToday ? 'bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center' : 'text-on-surface-variant'}`}>{cell.dayNumber}</span>
                      <div className="mt-2 space-y-1 max-h-[70px] overflow-y-auto custom-scrollbar">
                        {cell.deadlines.map((task) => (
                          <div key={task.id} className="bg-tertiary/10 border-l-2 border-tertiary px-1 py-0.5 rounded-sm">
                            <p className="text-[9px] md:text-[10px] font-bold text-tertiary truncate">{task.name}</p>
                          </div>
                        ))}
                        {cell.dayNumber === 15 && activeMonth === new Date().getMonth() && activeYear === new Date().getFullYear() && (
                          <div className="bg-primary/10 border-l-2 border-primary px-1 py-0.5 rounded-sm">
                            <p className="text-[9px] md:text-[10px] font-bold text-primary truncate">HIT Connect</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Stats / Sidebar */}
        <div className="lg:col-span-4 space-y-lg">
          <div className="bg-primary-container text-on-primary-container p-6 rounded-xxl shadow-sm relative overflow-hidden h-fit">
            <div className="relative z-10">
              <h4 className="font-title-lg text-title-lg mb-2">Upcoming Events</h4>
              <div className="space-y-4 mt-4">
                {tasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-start gap-4">
                    <div className="bg-on-primary-container/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined">event</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg font-bold">{task.name}</p>
                      <p className="text-xs opacity-80">Poster Due: {task.month.slice(0,3)} {task.day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] opacity-20 transform rotate-12">
              <span className="material-symbols-outlined text-[120px]">calendar_month</span>
            </div>
          </div>
          <div className="bg-surface-container p-6 rounded-xxl border border-outline-variant">
            <h4 className="font-label-lg text-label-lg font-bold mb-4">Legend</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-body-md text-on-surface">Today's Date</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                <span className="text-sm font-body-md text-on-surface">Poster Deadline</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-body-md text-on-surface">Completed Task</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks Overview Table Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xxl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-title-lg text-title-lg text-on-surface">Tasks Overview</h3>
          <div className="flex items-center gap-2">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
              <input 
                className="pl-10 pr-4 py-2 border border-outline-variant rounded-full text-sm bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-64" 
                placeholder="Filter tasks..." 
                type="text"
                value={taskFilter}
                onChange={(e) => setTaskFilter(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low font-label-lg text-label-lg text-on-surface-variant">
              <tr>
                <th className="px-6 py-4 font-semibold">Event Name</th>
                <th className="px-6 py-4 font-semibold">Designer</th>
                <th className="px-6 py-4 font-semibold">Co-designer</th>
                <th className="px-6 py-4 font-semibold">Assist</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">{task.type || 'code'}</span>
                      </div>
                      <span className="font-body-lg text-on-surface">{task.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.designer}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.coDesigner}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.assist}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-label-sm ${task.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : task.status === 'Draft' ? 'bg-surface-variant text-on-surface-variant' : 'bg-primary-container text-on-primary-container'}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a className="inline-flex items-center gap-1.5 bg-secondary text-on-secondary px-3 py-1.5 rounded-lg text-xs font-label-lg hover:bg-on-secondary-fixed-variant transition-colors" href="https://canva.com" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        Canva
                      </a>
                      <button 
                        className="p-1.5 text-primary hover:bg-primary-container/20 rounded-lg transition-colors cursor-pointer"
                        onClick={() => onEditTask(task)}
                        title="Edit Task"
                      >
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button 
                        className="p-1.5 text-error hover:bg-error-container/10 rounded-lg transition-colors cursor-pointer"
                        onClick={() => onDeleteTask(task.id)}
                        title="Delete Task"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Floating Action Button (FAB) Mobile */}
      <button 
        className="md:hidden fixed bottom-8 right-6 w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-2xl shadow-xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all"
        onClick={onAddTaskClick}
      >
        <span className="material-symbols-outlined text-2xl">edit</span>
      </button>
    </main>
  );
}

// 5. MEMBERS DIRECTORY VIEW (DESIGNERS SHEET)
function MembersDirectoryView({ designers, setDesigners }) {
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
            <button className="flex items-center gap-sm px-lg h-11 border border-primary text-primary rounded-full font-label-lg hover:bg-primary-container/10 transition-colors" onClick={() => alert('CSV Export simulated')}>
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>
          </div>
        </div>

        {/* Advanced Filters Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-md">
          <div className="md:col-span-2 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex items-center gap-lg">
            <div className="flex-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Filter by Department</label>
              <div className="flex flex-wrap gap-xs">
                {['All', 'CSE', 'IT', 'ECE', 'EE'].map((dept) => (
                  <button 
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`px-md py-xs rounded-full text-label-sm font-label-sm transition-colors ${activeDept === dept ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant'}`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Academic Year</label>
            <select 
              className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md p-0 appearance-none cursor-pointer text-on-surface focus:outline-none"
              value={activeYear}
              onChange={(e) => setActiveYear(e.target.value)}
            >
              <option>All Years</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Status</label>
            <select 
              className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md p-0 appearance-none cursor-pointer text-on-surface focus:outline-none"
              value={activeStatus}
              onChange={(e) => setActiveStatus(e.target.value)}
            >
              <option>Any Status</option>
              <option>Active</option>
              <option>Busy</option>
              <option>On Leave</option>
            </select>
          </div>
        </section>

        {/* Data Search Bar */}
        <div className="relative max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border border-outline-variant rounded-full text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-on-surface" 
            placeholder="Search designers..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Data Table Card */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Name</th>
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Roll No</th>
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Department</th>
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Contact Info</th>
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-lg py-md font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filteredDesigners.map((des) => (
                  <tr key={des.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed font-bold overflow-hidden">
                          <img alt={des.name} className="w-full h-full object-cover" src={des.avatar} />
                        </div>
                        <div>
                          <div className="font-title-lg text-label-lg text-on-surface">{des.name}</div>
                          <div className="text-body-md text-on-surface-variant">{des.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-on-surface">{des.roll}</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-secondary-container text-on-secondary-container rounded-lg text-label-sm font-label-sm">{des.dept}</span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="text-body-md text-on-surface">{des.email}</div>
                      <div className="text-label-sm text-on-surface-variant">{des.phone}</div>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <span className={`w-2 h-2 rounded-full ${des.status === 'Active' ? 'bg-secondary' : des.status === 'Busy' ? 'bg-tertiary' : 'bg-outline'}`}></span>
                        <span className="font-label-sm text-label-sm text-on-surface">{des.status}</span>
                      </div>
                    </td>
                    <td className="px-lg py-md text-center">
                      <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant" onClick={() => alert(`Options for ${des.name}`)}>
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Table Pagination/Footer */}
          <div className="bg-surface-container-low px-lg py-md flex items-center justify-between border-t border-outline-variant">
            <div className="text-label-sm text-on-surface-variant">Showing {filteredDesigners.length} of {designers.length} members</div>
            <div className="flex items-center gap-sm text-on-surface">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors opacity-50 cursor-not-allowed">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high font-label-sm">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="bg-primary-container p-lg rounded-xl text-on-primary-container flex items-center justify-between">
            <div>
              <div className="text-label-sm opacity-80">Total Active Designers</div>
              <div className="text-display-lg-mobile font-display-lg-mobile mt-xs">{activeCount}</div>
            </div>
            <span className="material-symbols-outlined text-4xl opacity-40">bolt</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center justify-between">
            <div>
              <div className="text-label-sm text-on-surface-variant">Pending Applications</div>
              <div className="text-display-lg-mobile font-display-lg-mobile mt-xs text-primary">12</div>
            </div>
            <span className="material-symbols-outlined text-4xl text-outline-variant">person_search</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center justify-between">
            <div>
              <div className="text-label-sm text-on-surface-variant">Departments Covered</div>
              <div className="text-display-lg-mobile font-display-lg-mobile mt-xs text-on-surface">06</div>
            </div>
            <span className="material-symbols-outlined text-4xl text-outline-variant">domain</span>
          </div>
        </div>
      </div>
    </main>
  );
}

// 6. ADMIN PANEL VIEW
function AdminPanelView({ members, setMembers, onAddMemberClick }) {
  const [adminSearchQuery, setAdminSearchQuery] = useState('');

  const filteredMembers = useMemo(() => {
    return members.filter(m => 
      m.name.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      m.dept.toLowerCase().includes(adminSearchQuery.toLowerCase())
    );
  }, [members, adminSearchQuery]);

  const handleDeleteMember = (id) => {
    if (confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleEditMember = (id) => {
    const newRole = prompt('Enter new role for member:');
    if (newRole) {
      setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Search Bar */}
      <header className="sticky top-0 z-10 flex justify-between items-center w-full px-lg py-sm bg-surface-container-lowest shadow-sm">
        <div className="flex items-center gap-xl flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full pl-12 pr-md py-2 bg-surface-container-low border-none rounded-full font-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary outline-none" 
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
            <button className="flex items-center gap-sm px-lg py-md bg-surface-container-highest text-on-surface rounded-full font-label-lg text-label-lg hover:bg-surface-variant transition-colors" onClick={() => alert('Filter applied')}>
              <span className="material-symbols-outlined">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-full font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm active:scale-95" onClick={onAddMemberClick}>
              <span className="material-symbols-outlined">person_add</span>
              Add New Member
            </button>
          </div>
        </section>

        {/* Bento Layout Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Total Members</p>
            <h3 className="font-display-lg text-headline-md text-primary mt-sm">124</h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="font-label-sm">+12% this month</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Chapter Leads</p>
            <h3 className="font-display-lg text-headline-md text-tertiary mt-sm">8</h3>
            <div className="mt-md flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              <span className="font-label-sm">Core team members</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Active Developers</p>
            <h3 className="font-display-lg text-headline-md text-secondary mt-sm">56</h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">code</span>
              <span className="font-label-sm">4 open projects</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/20">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">System Status</p>
            <h3 className="font-display-lg text-headline-md text-on-surface mt-sm">Healthy</h3>
            <div className="mt-md flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="font-label-sm">Updated 2m ago</span>
            </div>
          </div>
        </section>

        {/* Members Table Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="p-lg border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright">
            <h3 className="font-title-lg text-title-lg text-on-surface">Member Directory</h3>
            <div className="flex gap-sm">
              <span className="px-md py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">82 Active</span>
              <span className="px-md py-xs bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">42 Inactive</span>
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
                      <button className="p-sm text-on-surface-variant hover:text-primary transition-colors" onClick={() => handleEditMember(m.id)}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-sm text-on-surface-variant hover:text-error transition-colors" onClick={() => handleDeleteMember(m.id)}>
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
              <button className="px-md py-sm rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors font-label-lg disabled:opacity-50" disabled>Previous</button>
              <button className="px-md py-sm rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors font-label-lg">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// 7. PORTFOLIO VIEW
function PortfolioView({ tasks }) {
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
          <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-primary text-on-primary p-xl flex items-end min-h-[320px]">
            <div className="relative z-10 space-y-md">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">GDG HIT Core Team</span>
              <h1 className="text-display-lg font-display-lg text-white">Alex Rivera</h1>
              <p className="text-title-lg font-title-lg opacity-90 max-w-md text-white">Lead Visual & UI Designer dedicated to building seamless developer experiences for the GDG community.</p>
              <div className="flex gap-md pt-4">
                <button className="bg-on-primary text-primary px-gutter py-2.5 rounded-full font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-colors" onClick={() => alert('Editing profile simulation')}>Edit Profile</button>
                <button className="border border-on-primary text-on-primary px-gutter py-2.5 rounded-full font-label-lg text-label-lg hover:bg-on-primary/10 transition-colors" onClick={() => alert('Resume Download simulation')}>Download Resume</button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm flex flex-col justify-between">
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
            <button className="text-primary font-label-lg flex items-center gap-sm" onClick={() => alert('View All Works highlights')}>
              View All <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:h-[400px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcv-j-n_ZIY8KCmMnvT_7WLRrICSC8SEBaLILjr_OakYLUfBXkolaDUqJtNf6gL7XK77HfZxNIL9gOS1cYigrLxouQVgpee4lb_bDiu8ykSQTNWCcCeT9HCoVc8WovXVlH83GYOevwJJiX-07wwjDydl9ywwGKX92JkRwVGlSbNtWXOULdtXYgpmoRt76q4-9s_5ggt9mXbHtIIJXkaOQWMrWFcGESjqDjRDM_PCjoTMsSUwwXu_FcyfEEDmu4ZHta-3Ul8guabEtT" alt="GDG Portal"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-lg">
                <span className="text-white text-label-sm font-label-sm mb-xs">Web UI</span>
                <h4 className="text-white text-title-lg font-title-lg">GDG DevFest Portal 2024</h4>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwd3cD9BY7pFtYjvUL4arL8uHyzTOlw_4BjMaJKZqxlafn4acYNJQl__4PE_EGGLU93zyeu8pVIwY5djLUIh7q1MD_XvQ3YnLwQVqndADfEbxyf7YTVtvytkOyhJaNhwy2C2UQgbhb8qZdIMsXEdH_PWhbB3gY5dVrZ1qODDFN0P-WiJ0B2u9Dfq_26TcPu_5I35iIko4Bd0QwEgTB4eUm5197h2MBkGe4VoBYdqSvokGUu1z_7HTC3x8TT_Yqe0zfKxvCnHOTdtjz" alt="Hackathon"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-md">
                <span className="text-white text-label-sm font-label-sm mb-xs">Social Media</span>
                <h4 className="text-white text-body-lg font-bold">Hackathon 2024 Socials</h4>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNDsPxjYDMj1iYp0-CD3nkPS-q9exJtmJzgoshzmPG2ccHfU8M2g_tYI9t-goqaLJ3g0g1Lg63jYzIUb3-7vZtNiiHQK65JcfjSZWC4ZmR9p8ooCEFSKprhggtBIzzfbDZhoBTFSrFjLkazu1iXaYQhm0BfokwFR2o1PUr1fEK0g375rYrw5qRiQhUqbxHd2Kani71uqLdPXkKA0IKMb3FFLCO_HeXx47_fBMMAmQ-GOLYk_jiXi0rKoQplCOlHAFzyNGsHheXz-2" alt="Brand Guide"/>
            </div>
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
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
              <div className="flex bg-surface-container rounded-full p-1 shrink-0">
                <button className={`px-4 py-1.5 rounded-full text-label-lg font-label-lg ${selectedMonth === 'All' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('All')}>All</button>
                <button className={`px-4 py-1.5 rounded-full text-label-lg font-label-lg ${selectedMonth === 'May' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('May')}>May 2024</button>
                <button className={`px-4 py-1.5 rounded-full text-label-lg font-label-lg ${selectedMonth === 'June' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`} onClick={() => setSelectedMonth('June')}>June 2024</button>
              </div>
              <select 
                className="bg-surface-container border-none rounded-full px-4 py-1.5 text-label-lg font-label-lg focus:ring-primary focus:outline-none"
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
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
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
                        <div className={`w-10 h-10 rounded flex items-center justify-center ${work.colorClass}`}>
                          <span className="material-symbols-outlined">{work.icon}</span>
                        </div>
                        <span className="text-body-lg font-medium text-on-surface">{work.name}</span>
                      </div>
                    </td>
                    <td className="px-gutter py-4">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm font-label-sm text-on-surface-variant">{work.category}</span>
                    </td>
                    <td className="px-gutter py-4 text-body-md text-on-surface-variant">{work.date}</td>
                    <td className="px-gutter py-4 text-right">
                      <button className="text-primary hover:bg-primary-container/10 px-4 py-2 rounded-full font-label-lg transition-colors flex items-center gap-2 ml-auto" onClick={() => alert(`Navigating to Canva workspace for ${work.name}`)}>
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
                <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined">chevron_left</span></button>
                <button className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">1</button>
                <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined">chevron_right</span></button>
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

// 8. PROJECTS VIEW COMPONENT
function ProjectsView({ projects }) {
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

      <section className="bg-surface-container-lowest border border-outline-variant rounded-xxl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-title-lg text-title-lg text-on-surface">Projects Showcase</h3>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input 
              className="pl-10 pr-4 py-2 border border-outline-variant rounded-full text-sm bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-64" 
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
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg font-variation-settings: 'FILL' 1">folder</span>
                      </div>
                      <span className="font-body-lg text-on-surface font-semibold">{project.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{project.designer}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">{project.category}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-label-sm ${project.status === 'Completed' ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary-container text-on-primary-container'}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <a className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2 rounded-lg text-xs font-label-lg hover:bg-on-secondary-fixed-variant transition-colors" href={project.link} target="_blank" rel="noreferrer">
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

// 9. HELP VIEW COMPONENT
function HelpView() {
  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      <div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">Help Center &amp; Guidelines</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Find tutorials, brand guidelines, and answers to common task management questions.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="bg-surface-container-lowest p-6 rounded-xxl border border-outline-variant shadow-sm space-y-md">
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

        <div className="bg-surface-container-lowest p-6 rounded-xxl border border-outline-variant shadow-sm space-y-md">
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

// 10. SETTINGS VIEW COMPONENT
function SettingsView() {
  const [notifPreferences, setNotifPreferences] = useState({ email: true, push: false });
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="w-full p-margin-mobile md:p-margin-desktop space-y-xl animate-in fade-in duration-300">
      <div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">System Settings</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">Configure your personal notifications, system themes, and profile settings.</p>
      </div>

      <section className="bg-surface-container-lowest p-6 rounded-xxl border border-outline-variant shadow-sm max-w-2xl space-y-lg">
        {/* Theme settings */}
        <div className="flex justify-between items-center py-3 border-b border-outline-variant">
          <div>
            <h4 className="font-semibold text-on-surface">Dark Mode</h4>
            <p className="text-xs text-on-surface-variant">Toggle dark theme across the admin panel dashboard.</p>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none ${darkMode ? 'bg-primary' : 'bg-surface-dim'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Notifications settings */}
        <div className="space-y-4">
          <h4 className="font-semibold text-on-surface">Notification Preferences</h4>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="text-sm text-on-surface-variant">Email alerts for newly assigned tasks</span>
            <input 
              type="checkbox" 
              checked={notifPreferences.email} 
              onChange={() => setNotifPreferences({ ...notifPreferences, email: !notifPreferences.email })}
              className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer transition-all"
            />
          </label>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="text-sm text-on-surface-variant">System push notifications on deadline updates</span>
            <input 
              type="checkbox" 
              checked={notifPreferences.push} 
              onChange={() => setNotifPreferences({ ...notifPreferences, push: !notifPreferences.push })}
              className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer transition-all"
            />
          </label>
        </div>
      </section>
    </main>
  );
}

// 11. TERMS & CONDITIONS VIEW COMPONENT
function TermsView({ onBack, isLoggedIn }) {
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
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Sign In
            </button>
          )}
        </div>

        <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xxl border border-outline-variant shadow-sm space-y-lg text-on-surface">
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

// 12. PRIVACY POLICY VIEW COMPONENT
function PrivacyView({ onBack, isLoggedIn }) {
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
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Sign In
            </button>
          )}
        </div>

        <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xxl border border-outline-variant shadow-sm space-y-lg text-on-surface">
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

// 13. PROFILE VIEW COMPONENT
function ProfileView({ user, onUpdateUser, tasks }) {
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
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xxl overflow-hidden shadow-sm">
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
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer self-start md:self-end"
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
          <div className="bg-surface-container-lowest p-6 rounded-xxl border border-outline-variant shadow-sm">
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
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Chapter Role</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.roll}
                      onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Department</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.dept}
                      onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Year</label>
                    <select 
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-label-lg"
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
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Biography</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-2 border border-outline rounded-xl bg-transparent text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-body-md"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button 
                    type="button" 
                    className="px-5 py-2 border border-outline rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors font-label-lg"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 bg-primary text-on-primary rounded-full shadow-sm hover:shadow-md transition-all font-label-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-on-surface">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider font-label-sm">Biography</span>
                  <p className="text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl italic">
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
          <div className="bg-surface-container-lowest p-6 rounded-xxl border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">assignment</span>
              Assigned Deadlines ({myTasks.length})
            </h3>
            {myTasks.length > 0 ? (
              <div className="space-y-3">
                {myTasks.map((t) => (
                  <div key={t.id} className="flex justify-between items-center p-4 rounded-xl bg-surface-container-low border border-outline-variant/50 hover:bg-surface-container-high transition-colors">
                    <div>
                      <h4 className="font-semibold text-on-surface text-sm">{t.name}</h4>
                      <p className="text-xs text-on-surface-variant">Deadline: {t.month} {t.day}</p>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${t.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'}`}>{t.status}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant">
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

