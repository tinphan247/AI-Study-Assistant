import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { ActionCard } from "@/components/ui/ActionCard";
import { Upload, FileText, LayoutTemplate, MessageSquare, Sparkles, Send } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-ethereal min-h-screen font-body text-on-surface flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen p-12 pb-32">
        <Navbar />
        
        {/* Hero Greeting */}
        <section className="mb-12">
          <h1 className="text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-2">
            Hey Alex,
          </h1>
          <p className="text-2xl font-body text-on-surface-variant font-light">
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
            gradient="from-violet-500 to-indigo-400"
          />
          <ActionCard 
            title="Summarize Documents" 
            description="Condense complex chapters into beautiful, readable study guides."
            icon={<FileText className="w-8 h-8" />}
            linkTo="/summary"
            gradient="from-amber-400 to-orange-400"
          />
          <ActionCard 
            title="Generate Quiz" 
            description="Instantly turn notes into interactive flashcards and practice tests."
            icon={<LayoutTemplate className="w-8 h-8" />}
            linkTo="/quiz"
            gradient="from-pink-500 to-rose-400"
          />
          <ActionCard 
            title="Chat with Documents" 
            description="Ask your textbooks questions directly and get sourced answers."
            icon={<MessageSquare className="w-8 h-8" />}
            linkTo="/chat"
            gradient="from-emerald-400 to-teal-500"
          />
        </section>
      </main>

      {/* Floating AI Chat Input */}
      <div className="fixed bottom-0 left-64 right-0 z-50 flex justify-center pb-8 px-6">
        <div className="w-full max-w-3xl mx-auto group">
          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-full border border-slate-300 dark:border-slate-700 shadow-2xl shadow-violet-500/15 p-2 flex items-center gap-3 hover:shadow-violet-500/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-500/50">
            <div className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" />
              <span className="font-label text-sm font-semibold tracking-wide">AI Chat</span>
            </div>
            <input 
              className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-slate-900 dark:text-white font-body py-2 px-2 placeholder-slate-500 dark:placeholder-slate-400" 
              placeholder="Ask anything about your documents..." 
              type="text"
            />
            <button className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 transition-colors active:scale-95 shrink-0 shadow-md">
              <Send className="w-5 h-5 -ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
