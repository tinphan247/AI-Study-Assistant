import { Search, Bell, History } from 'lucide-react';

export function Navbar() {
  return (
    <header className="flex justify-between items-center w-full mb-12 py-2">
      <div className="flex items-center bg-[color:var(--color-surface)] backdrop-blur-xl rounded-full px-4 py-2 border border-[color:var(--color-border)] w-full max-w-md focus-within:ring-2 focus-within:ring-[color:var(--color-primary)] focus-within:border-transparent transition-all shadow-sm">
        <Search className="w-5 h-5 text-[color:var(--color-text-secondary)] shrink-0" />
        <input 
          className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-body w-full px-3 text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-secondary)]" 
          placeholder="Search your library..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[color:var(--color-surface)] backdrop-blur-xl border border-[color:var(--color-border)] hover:bg-[color:var(--color-primary-soft)] transition-colors shadow-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[color:var(--color-surface)] backdrop-blur-xl border border-[color:var(--color-border)] hover:bg-[color:var(--color-primary-soft)] transition-colors shadow-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]">
          <History className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
