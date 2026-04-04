export function Navbar() {
  return (
    <header className="flex justify-between items-center w-full mb-12 py-2">
      <div className="flex items-center bg-white/40 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20 w-full max-w-md">
        <span className="material-symbols-outlined text-outline">search</span>
        <input 
          className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-body w-full px-3" 
          placeholder="Search your library..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/60 transition-colors">
          <span className="material-symbols-outlined text-on-surface">notifications</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/60 transition-colors">
          <span className="material-symbols-outlined text-on-surface">history</span>
        </button>
      </div>
    </header>
  );
}
