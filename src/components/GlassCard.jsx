export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        p-6 
        shadow-2xl
        hover:bg-white/10
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}