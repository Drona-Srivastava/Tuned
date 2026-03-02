export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-8 py-6 border-b border-white/10">
      <div className="text-lg font-semibold tracking-wide">
        Tuned
      </div>

      <div className="text-sm text-gray-400">
        Dashboard
      </div>

      <div className="text-sm text-gray-400">
        Profile
      </div>
    </div>
  );
}