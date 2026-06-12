import React, { useState, useMemo } from 'react';

export default function DashboardView({ tasks, onAddTaskClick, navigateTo, onEditTask, onDeleteTask }) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date()); // Initialize to actual current date
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
          className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-md font-label-lg text-label-lg shadow-sm hover:shadow-md active:scale-95 transition-all w-fit cursor-pointer font-bold" 
          onClick={onAddTaskClick}
        >
          <span className="material-symbols-outlined">add</span>
          Add Event / Task
        </button>
      </section>

      {/* Calendar Bento Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Large Calendar Container - 16px radius (rounded-lg) */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="font-title-lg text-title-lg text-on-surface">{months[activeMonth]} {activeYear}</h3>
              <div className="flex items-center gap-2">
                <button className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface cursor-pointer" onClick={() => changeMonth(-1)}>chevron_left</button>
                <button className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface cursor-pointer" onClick={() => changeMonth(1)}>chevron_right</button>
              </div>
            </div>
            <button 
              className="px-4 py-2 text-primary font-label-lg text-label-lg hover:bg-primary-container/10 rounded-full transition-colors cursor-pointer"
              onClick={() => setCurrentCalendarDate(new Date())}
            >
              Today
            </button>
          </div>
          <div className="p-4 flex-grow overflow-x-auto custom-scrollbar">
            <div className="min-w-[600px]">
              {/* Fix unmapped calendar-grid class to standard Tailwind grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                  <div key={dayName} className="text-center font-label-sm text-label-sm text-on-surface-variant py-2 uppercase tracking-widest">{dayName}</div>
                ))}
              </div>
              {/* Fix unmapped calendar-grid and transition styles */}
              <div className="grid grid-cols-7 gap-1 transition-transform duration-300 ease-in-out">
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
          {/* Card - 16px radius (rounded-lg) */}
          <div className="bg-primary-container text-on-primary-container p-6 rounded-lg shadow-sm relative overflow-hidden h-fit">
            <div className="relative z-10">
              <h4 className="font-title-lg text-title-lg mb-2">Upcoming Events</h4>
              <div className="space-y-4 mt-4">
                {tasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-start gap-4">
                    <div className="bg-on-primary-container/20 p-2 rounded-md">
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
          {/* Card - 16px radius (rounded-lg) */}
          <div className="bg-surface-container p-6 rounded-lg border border-outline-variant">
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

      {/* Tasks Overview Table Section - 16px radius (rounded-lg) */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-title-lg text-title-lg text-on-surface">Tasks Overview</h3>
          <div className="flex items-center gap-2">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
              <input 
                className="pl-10 pr-4 py-2 border border-outline-variant rounded-md text-sm bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-64" 
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
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">{task.type || 'code'}</span>
                      </div>
                      <span className="font-body-lg text-on-surface">{task.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.designer}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.coDesigner}</td>
                  <td className="px-6 py-5 font-body-md text-on-surface-variant">{task.assist}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-md text-xs font-label-sm ${task.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : task.status === 'Draft' ? 'bg-surface-variant text-on-surface-variant' : 'bg-primary-container text-on-primary-container'}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* Canva action - 12px radius (rounded-md) */}
                      <a className="inline-flex items-center gap-1.5 bg-secondary text-on-secondary px-3 py-1.5 rounded-md text-xs font-label-lg hover:bg-on-secondary-fixed-variant transition-colors" href="https://canva.com" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        Canva
                      </a>
                      <button 
                        className="p-1.5 text-primary hover:bg-primary-container/20 rounded-md transition-colors cursor-pointer"
                        onClick={() => onEditTask(task)}
                        title="Edit Task"
                      >
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button 
                        className="p-1.5 text-error hover:bg-error-container/10 rounded-md transition-colors cursor-pointer"
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

      {/* Floating Action Button (FAB) Mobile - Full rounding (rounded-full) */}
      <button 
        className="md:hidden fixed bottom-8 right-6 w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        onClick={onAddTaskClick}
      >
        <span className="material-symbols-outlined text-2xl">edit</span>
      </button>
    </main>
  );
}
