import Link from 'next/link';

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col p-6 w-64 rounded-r-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl shadow-[0px_30px_60px_rgba(44,47,51,0.06)] z-40 tonal-shift bg-surface-container-low">
      <div className="mb-10 px-4">
        <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-400 bg-clip-text text-transparent font-headline tracking-wide">
          Study Assistant
        </span>
        <p className="text-xs text-on-surface-variant mt-1">The Ethereal Scholar</p>
      </div>

      <div className="flex flex-col space-y-2 flex-grow">
        <Link href="/dashboard" className="flex items-center gap-4 px-4 py-3 text-violet-700 dark:text-violet-300 font-bold border-r-4 border-violet-500 bg-violet-50/50 dark:bg-violet-900/20 transition-all duration-300 scale-95 hover:bg-violet-100/50 rounded-l-lg">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label">Dashboard</span>
        </Link>
        <Link href="/library" className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 font-medium hover:bg-violet-50/50 dark:hover:bg-violet-900/20 transition-all duration-300 rounded-l-lg">
          <span className="material-symbols-outlined">book_5</span>
          <span className="font-label">Library</span>
        </Link>
        <Link href="/quiz" className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 font-medium hover:bg-violet-50/50 dark:hover:bg-violet-900/20 transition-all duration-300 rounded-l-lg">
          <span className="material-symbols-outlined">quiz</span>
          <span className="font-label">Quizzes</span>
        </Link>
        <Link href="/chat" className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 font-medium hover:bg-violet-50/50 dark:hover:bg-violet-900/20 transition-all duration-300 rounded-l-lg">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-label">AI Assistant</span>
        </Link>
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant/15">
        <Link href="/settings" className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 font-medium hover:bg-violet-50/50 dark:hover:bg-violet-900/20 transition-all duration-300 rounded-lg">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label">Settings</span>
        </Link>
        <div className="mt-4 flex items-center gap-3 px-4 py-3">
          <img 
            alt="User Profile" 
            className="w-10 h-10 rounded-full border-2 border-white/50 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmip03nbItE1Sk1AFrLpjNJvuGQXDGx15D6QjIOrWu5DoklmWuy4iuSdSwudpYcoDL-Q__Mssar5Oc1B9gZf2kcv0hZB1A82hVEmFaNQ2mpn9UG8NVX6rEkfR_L1dLBn8YLtKkACq0EPco-ZQhAH36crpFJKeo4T0FZsa_MHOWAG-Ro8sQEAsSpIrb6hgLYLABkXpPFvJvJuP5q_C29WMK69gWoi0CnuyJcFhVNkLygQdxc6mtP2VWS45v-Ed9EANodEBIzMrW8Tk"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Alex Chen</p>
            <p className="text-[10px] text-on-surface-variant truncate">Premium Scholar</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
