
import React, { useState, useEffect } from 'react';
import { Code, Users, Star, Trophy } from 'lucide-react';

const DynamicIsland = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    stars: 0,
    awards: 0
  });

  const targetStats = {
    projects: 15,
    clients: 25,
    stars: 120,
    awards: 8
  };

  useEffect(() => {
    const animateStats = () => {
      Object.keys(targetStats).forEach((key) => {
        const target = targetStats[key as keyof typeof targetStats];
        const increment = Math.ceil(target / 50);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: current }));
        }, 50);
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const statItems = [
    { icon: Code, label: 'Projects', value: stats.projects, color: 'text-green-400' },
    { icon: Users, label: 'Clients', value: stats.clients, color: 'text-blue-400' },
    { icon: Star, label: 'GitHub Stars', value: stats.stars, color: 'text-yellow-400' },
    { icon: Trophy, label: 'Awards', value: stats.awards, color: 'text-purple-400' }
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="glass-card px-6 py-3 rounded-full flex items-center space-x-6 animate-float">
        {statItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <div className="text-center">
              <div className="text-sm font-bold text-white">{item.value}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicIsland;
