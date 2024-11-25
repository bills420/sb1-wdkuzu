import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  category: string;
}

export default function ServiceCard({ title, description, Icon, category }: ServiceCardProps) {
  return (
    <div className="bg-[#0A0A0A] p-6 rounded-lg border border-gray-800 hover:border-[#0066FF]/50 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-block p-3 bg-[#111111] rounded-lg">
          <Icon className="h-6 w-6 text-[#0066FF]" />
        </div>
        <span className="text-sm text-[#0066FF] font-medium">{category}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  );
}