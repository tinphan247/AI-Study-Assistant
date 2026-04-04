import Link from 'next/link';

interface ActionCardProps {
  title: string;
  description: string;
  icon: string;
  linkTo: string;
  gradient?: string;
}

export function ActionCard({ 
  title, 
  description, 
  icon, 
  linkTo,
  gradient = "from-violet-500 to-indigo-400"
}: ActionCardProps) {
  return (
    <Link href={linkTo} className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-lg p-8 border border-white/30 shadow-2xl shadow-violet-500/5 hover:scale-105 hover:shadow-violet-500/15 transition-all duration-500 block">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:glow-primary`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold font-headline mb-3">{title}</h3>
      <p className="text-sm text-on-surface-variant font-body">{description}</p>
      
      {/* Visual cue for navigation */}
      <div className="mt-6 flex justify-end">
        <span className="material-symbols-outlined text-violet-500 group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
    </Link>
  );
}
