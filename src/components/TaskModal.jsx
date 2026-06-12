import React from 'react';

export default function TaskModal({ isOpen, onClose, editingTask, taskForm, setTaskForm, onSubmit, designers }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-40 cursor-pointer" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-50 bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {editingTask ? 'Edit Task / Event' : 'New Task / Event'}
          </h3>
          <button 
            className="material-symbols-outlined p-2 hover:bg-surface-variant rounded-full text-on-surface-variant cursor-pointer" 
            onClick={onClose}
            type="button"
          >
            close
          </button>
        </div>
        <form className="p-6 space-y-md" onSubmit={onSubmit}>
          {/* Name field */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Task / Event Name</label>
            <input 
              className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
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
                className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
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
                className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-transparent text-on-surface font-body-md" 
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
                className="w-full px-3 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface text-xs font-label-lg"
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
                className="w-full px-3 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-transparent text-on-surface text-xs font-body-md" 
                type="text" 
                value={taskForm.coDesigner}
                onChange={(e) => setTaskForm({ ...taskForm, coDesigner: e.target.value })}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-on-surface-variant font-label-lg">Assist</label>
              <input 
                className="w-full px-3 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-transparent text-on-surface text-xs font-body-md" 
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
                className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
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
                className="w-full px-4 py-2 border border-outline rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-surface-container-low text-on-surface font-label-lg"
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
              className="flex-1 px-6 py-2.5 border border-outline-variant rounded-md font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer" 
              onClick={onClose} 
              type="button"
            >
              Cancel
            </button>
            <button 
              className="flex-1 px-6 py-2.5 bg-primary text-on-primary rounded-md font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer font-bold" 
              type="submit"
            >
              {editingTask ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
