import React, { useState } from 'react';

// Components
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';
import TaskModal from './components/TaskModal';

// Views
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import MembersDirectoryView from './views/MembersDirectoryView';
import AdminPanelView from './views/AdminPanelView';
import PortfolioView from './views/PortfolioView';
import ProjectsView from './views/ProjectsView';
import HelpView from './views/HelpView';
import SettingsView from './views/SettingsView';
import TermsView from './views/TermsView';
import PrivacyView from './views/PrivacyView';
import ProfileView from './views/ProfileView';

// Main Application Component
export default function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login' | 'dashboard' | 'members' | 'admin' | 'projects' | 'portfolio' | 'profile' | 'help' | 'settings' | 'terms' | 'privacy'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        onNavigate={navigateTo}
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
            />
          )}

          {currentView === 'projects' && (
            <ProjectsView 
              projects={projects}
            />
          )}

          {currentView === 'portfolio' && (
            <PortfolioView 
              tasks={tasks}
            />
          )}

          {currentView === 'profile' && (
            <ProfileView 
              user={currentUser} 
              onUpdateUser={setCurrentUser} 
              tasks={tasks}
            />
          )}

          {currentView === 'help' && (
            <HelpView />
          )}

          {currentView === 'settings' && (
            <SettingsView />
          )}

          {currentView === 'terms' && (
            <TermsView isLoggedIn={true} onBack={() => navigateTo('login')} />
          )}

          {currentView === 'privacy' && (
            <PrivacyView isLoggedIn={true} onBack={() => navigateTo('login')} />
          )}
        </div>
      </div>

      {/* Task Add / Edit Modal */}
      <TaskModal 
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingTask(null); }}
        editingTask={editingTask}
        taskForm={taskForm}
        setTaskForm={setTaskForm}
        onSubmit={handleTaskFormSubmit}
        designers={designers}
      />
    </div>
  );
}
