import React from 'react';
import { Award, TrendingUp, Shield } from 'lucide-react';
import { FeatureData } from '../types';

interface FeaturesProps {
  items: FeatureData[];
}

const Features: React.FC<FeaturesProps> = ({ items }) => {
  const icons = [
    <Award className="w-6 h-6 text-brand-gold" key="award" />,
    <TrendingUp className="w-6 h-6 text-brand-gold" key="trending" />,
    <Shield className="w-6 h-6 text-brand-gold" key="shield" />
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto px-4 relative z-30 animate-fade-in-up delay-300">
      {items.map((feature, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
          <div className="bg-brand-dark/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-white/5">
            {icons[index % icons.length]}
          </div>
          <h3 className="text-xl font-serif text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;