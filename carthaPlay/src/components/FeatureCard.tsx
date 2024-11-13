import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};