import Link from 'next/link';
import { LayoutDashboard, BookOpen, FileQuestion, Bot, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col p-6 w-64 bg-[rgba(15,23,42,0.6)] backdrop-blur-2xl border-r border-[color:var(--color-border)] z-40">
      <div className="mb-10 px-4">
        <span className="text-xl font-bold text-[color:var(--color-text-primary)] font-headline tracking-wide">
          Study Assistant
        </span>
        <p className="text-xs text-[color:var(--color-text-secondary)] mt-1">The Ethereal Scholar</p>
      </div>

      <div className="flex flex-col space-y-2 flex-grow">
        <Link href="/dashboard" className="flex items-center gap-4 px-4 py-3 text-[color:var(--color-text-primary)] font-bold bg-[color:var(--color-primary-soft)] border-r-2 border-[color:var(--color-primary)] transition-all duration-300 rounded-l-lg">
          <LayoutDashboard className="w-5 h-5 text-[color:var(--color-primary)]" />
          <span className="font-label">Dashboard</span>
        </Link>
        <Link href="/library" className="flex items-center gap-4 px-4 py-3 text-[color:var(--color-text-secondary)] font-medium hover:bg-[color:var(--color-surface)] transition-all duration-300 rounded-lg hover:text-[color:var(--color-text-primary)]">
          <BookOpen className="w-5 h-5" />
          <span className="font-label">Library</span>
        </Link>
        <Link href="/quiz" className="flex items-center gap-4 px-4 py-3 text-[color:var(--color-text-secondary)] font-medium hover:bg-[color:var(--color-surface)] transition-all duration-300 rounded-lg hover:text-[color:var(--color-text-primary)]">
          <FileQuestion className="w-5 h-5" />
          <span className="font-label">Quizzes</span>
        </Link>
        <Link href="/chat" className="flex items-center gap-4 px-4 py-3 text-[color:var(--color-text-secondary)] font-medium hover:bg-[color:var(--color-surface)] transition-all duration-300 rounded-lg hover:text-[color:var(--color-text-primary)]">
          <Bot className="w-5 h-5" />
          <span className="font-label">AI Assistant</span>
        </Link>
      </div>

      <div className="mt-auto pt-6 border-t border-[color:var(--color-border)]">
        <Link href="/settings" className="flex items-center gap-4 px-4 py-3 text-[color:var(--color-text-secondary)] font-medium hover:bg-[color:var(--color-surface)] transition-all duration-300 rounded-lg hover:text-[color:var(--color-text-primary)]">
          <Settings className="w-5 h-5" />
          <span className="font-label">Settings</span>
        </Link>
        <div className="mt-4 flex items-center gap-3 px-4 py-3">
          <img 
            alt="User Profile" 
            className="w-10 h-10 rounded-full border-2 border-[color:var(--color-border)] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmip03nbItE1Sk1AFrLpjNJvuGQXDGx15D6QjIOrWu5DoklmWuy4iuSdSwudpYcoDL-Q__Mssar5Oc1B9gZf2kcv0hZB1A82hVEmFaNQ2mpn9UG8NVX6rEkfR_L1dLBn8YLtKkACq0EPco-ZQhAH36crpFJKeo4T0FZsa_MHOWAG-Ro8sQEAsSpIrb6hgLYLABkXpPFvJvJuP5q_C29WMK69gWoi0CnuyJcFhVNkLygQdxc6mtP2VWS45v-Ed9EANodEBIzMrW8Tk"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-[color:var(--color-text-primary)]">Alex Chen</p>
            <p className="text-[10px] text-[color:var(--color-text-secondary)] truncate">Premium Scholar</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
