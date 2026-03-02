import GlassCard from "./GlassCard";

export default function StatCard({ title, value, subtitle }) {
  return (
    <GlassCard className="h-40 flex flex-col justify-between">
      <div className="text-gray-400 text-sm">{title}</div>
      <div className="text-3xl font-bold tracking-tight">
        {value}
      </div>
      <div className="text-xs text-gray-500">
        {subtitle}
      </div>
    </GlassCard>
  );
}