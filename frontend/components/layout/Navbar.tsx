import { Search, Bell, History } from 'lucide-react';

export function Navbar() {
  return (
    <header className="flex justify-between items-center w-full mb-12 py-2">
      <div className="flex items-center bg-white/70 backdrop-blur-xl rounded-full px-4 py-2 border border-slate-300 dark:bg-slate-900/70 dark:border-slate-700 w-full max-w-md focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-transparent transition-all shadow-sm">
        <Search className="w-5 h-5 text-slate-500 shrink-0" />
        <input 
          className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-body w-full px-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400" 
          placeholder="Search your library..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-slate-50 dark:bg-slate-900/70 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-slate-50 dark:bg-slate-900/70 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
          <History className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
