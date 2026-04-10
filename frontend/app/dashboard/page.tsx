import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { ActionCard } from "@/components/ui/ActionCard";
import { Upload, FileText, LayoutTemplate, MessageSquare, Sparkles, Send } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-ethereal min-h-screen font-body text-[color:var(--color-text-primary)] flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen p-12 pb-32">
        <Navbar />
        
        {/* Hero Greeting */}
        <section className="mb-12">
          <h1 className="text-5xl font-extrabold font-headline text-[color:var(--color-text-primary)] tracking-tight mb-2">
            Hey Alex,
          </h1>
          <p className="text-2xl font-body text-[color:var(--color-text-secondary)] font-light">
            what do you want to learn today?
          </p>
        </section>

        {/* Glassmorphism Action Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ActionCard 
            title="Upload File" 
            description="Drag & drop PDF, Word or Text files here"
            icon={<Upload className="w-8 h-8" />}
            linkTo="/upload"
          />
          <ActionCard 
            title="Summarize Documents" 
            description="Condense complex chapters into beautiful, readable study guides."
            icon={<FileText className="w-8 h-8" />}
            linkTo="/summary"
          />
          <ActionCard 
            title="Generate Quiz" 
            description="Instantly turn notes into interactive flashcards and practice tests."
            icon={<LayoutTemplate className="w-8 h-8" />}
            linkTo="/quiz"
          />
          <ActionCard 
            title="Chat with Documents" 
            description="Ask your textbooks questions directly and get sourced answers."
            icon={<MessageSquare className="w-8 h-8" />}
            linkTo="/chat"
          />
        </section>
      </main>

      {/* Floating AI Chat Input */}
      <div className="fixed bottom-0 left-64 right-0 z-50 flex justify-center pb-8 px-6">
        <div className="w-full max-w-3xl mx-auto group">
          <div className="relative bg-[color:var(--color-surface)] backdrop-blur-2xl rounded-full border border-[color:var(--color-border)] shadow-[0_0_25px_rgba(124,58,237,0.35)] p-2 flex items-center gap-3 hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all duration-300 focus-within:ring-2 focus-within:ring-[color:var(--color-primary)]">
            <div className="bg-[color:var(--color-primary)] text-[color:var(--color-text-primary)] rounded-full px-5 py-2.5 flex items-center gap-2 shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" />
              <span className="font-label text-sm font-semibold tracking-wide">AI Chat</span>
            </div>
            <input 
              className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-[color:var(--color-text-primary)] font-body py-2 px-2 placeholder-[color:var(--color-text-secondary)]" 
              placeholder="Ask anything about your documents..." 
              type="text"
            />
            <button className="w-11 h-11 rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-primary)] flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95 shrink-0 shadow-md">
              <Send className="w-5 h-5 -ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
