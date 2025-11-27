import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark/80 z-10"></div>
      {/* Using a high-quality architectural placeholder */}
      <img 
        src="https://picsum.photos/1920/1080?grayscale&blur=2" 
        alt="Modern Architecture Background" 
        className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        style={{ animationDuration: '30s' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50 z-20"></div>
    </div>
  );
};

export default Background;
