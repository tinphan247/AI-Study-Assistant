import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
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
    <Link href={linkTo} className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-lg p-8 border border-white/40 dark:border-white/10 shadow-2xl shadow-violet-500/5 hover:scale-105 hover:shadow-violet-500/15 transition-all duration-500 block">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:glow-primary`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-base text-slate-600 dark:text-slate-300 font-normal">{description}</p>
      
      {/* Visual cue for navigation */}
      <div className="mt-6 flex justify-end">
        <ArrowRight className="w-6 h-6 text-violet-500 group-hover:translate-x-2 group-hover:text-indigo-600 transition-all duration-300" />
      </div>
    </Link>
  );
}
