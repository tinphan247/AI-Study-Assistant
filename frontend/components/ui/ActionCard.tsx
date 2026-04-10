import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

export function ActionCard({ 
  title, 
  description, 
  icon, 
  linkTo
}: ActionCardProps) {
  return (
    <Link href={linkTo} className="group relative bg-[color:var(--color-surface)] backdrop-blur-xl rounded-lg p-8 border border-[color:var(--color-border)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out block">
      <div className="w-16 h-16 rounded-2xl bg-[color:var(--color-primary-soft)] flex items-center justify-center text-[color:var(--color-primary)] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-[color:var(--color-text-primary)]">{title}</h3>
      <p className="text-base text-[color:var(--color-text-secondary)] font-normal">{description}</p>
      
      {/* Visual cue for navigation */}
      <div className="mt-6 flex justify-end">
        <ArrowRight className="w-6 h-6 text-[color:var(--color-text-secondary)] group-hover:translate-x-[6px] group-hover:text-[color:var(--color-primary)] transition-all duration-300" />
      </div>
    </Link>
  );
}
