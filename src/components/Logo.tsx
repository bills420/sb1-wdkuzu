import { Crown } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Crown className="h-8 w-8 text-[#0066FF]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
      </div>
      <div className="ml-2 flex flex-col -space-y-1">
        <span className="text-xl font-bold text-white tracking-tight">BILLS CO.</span>
        <span className="text-xs text-[#0066FF] font-medium tracking-wider">ELITE SERVICES</span>
      </div>
    </div>
  );
}