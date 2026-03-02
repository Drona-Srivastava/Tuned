import Navbar from "../components/Navbar";
import GlassCard from "../components/GlassCard";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <div className="p-8 grid grid-cols-3 gap-6">
        
        {/* Left Info Panel */}
        <GlassCard className="col-span-1 h-80">
          <h2 className="text-xl font-semibold mb-4">
            Your Music Profile
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover your listening patterns, top artists, 
            and vibe insights powered by Tuned.
          </p>
        </GlassCard>

        {/* Hero Panel (Big Card Like Screenshot) */}
        <GlassCard className="col-span-2 h-80 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Minutes Listened
            </p>
            <h1 className="text-6xl font-bold tracking-tight">
              12,450
            </h1>
          </div>
        </GlassCard>

        {/* Stats Row */}
        <StatCard 
          title="Top Artist" 
          value="Drake" 
          subtitle="Most played this month"
        />
        <StatCard 
          title="Top Genre" 
          value="Hip-Hop" 
          subtitle="Your dominant vibe"
        />
        <StatCard 
          title="Top Song" 
          value="Blinding Lights" 
          subtitle="On repeat"
        />
      </div>
    </div>
  );
}