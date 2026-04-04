import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { ActionCard } from "@/components/ui/ActionCard";

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
            title="Upload Document" 
            description="Drag & drop PDF, Word or Text files here"
            icon="upload_file"
            linkTo="/upload"
            gradient="from-violet-500 to-indigo-400"
          />
          <ActionCard 
            title="AI Summary" 
            description="Condense complex chapters into beautiful, readable study guides."
            icon="summarize"
            linkTo="/summary"
            gradient="from-secondary-container to-secondary"
          />
          <ActionCard 
            title="Quiz Generator" 
            description="Instantly turn notes into interactive flashcards and practice tests."
            icon="psychology"
            linkTo="/quiz"
            gradient="from-tertiary to-tertiary-fixed-dim"
          />
          <ActionCard 
            title="Chat with Doc" 
            description="Ask your textbooks questions directly and get sourced answers."
            icon="forum"
            linkTo="/chat"
            gradient="from-primary-dim to-primary-fixed-dim"
          />
        </section>
      </main>

      {/* Floating AI Chat Input mimicking the original code */}
      <div className="fixed bottom-0 left-64 right-0 z-50 flex justify-center pb-8 animate-[pulse_3s_ease-in-out_infinite]">
        <div className="w-full max-w-3xl mx-auto px-6">
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl shadow-violet-500/10 p-2 flex items-center gap-4 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300">
            <div className="bg-gradient-to-r from-violet-500 to-indigo-400 text-white rounded-full px-6 py-2 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
              <span className="font-label text-sm font-semibold">AI Chat</span>
            </div>
            <input className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface font-body py-2 px-2" placeholder="Ask anything about your documents..." type="text"/>
            <button className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
