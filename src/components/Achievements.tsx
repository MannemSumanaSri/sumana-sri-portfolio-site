
import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: Target,
      title: 'GFG 160-day streak',
      description: 'Consistent problem solving on GeeksforGeeks platform',
      category: 'Consistency'
    },
    {
      icon: Award,
      title: 'Programming using Python',
      description: 'GeeksforGeeks Certification',
      category: 'Certification'
    },
    {
      icon: Star,
      title: 'Generative AI',
      description: 'Skillsoft Certification',
      category: 'AI/ML'
    },
    {
      icon: Trophy,
      title: 'Data Structures',
      description: 'TechAugusta Certification',
      category: 'DSA'
    },
    {
      icon: Trophy,
      title: 'Inter College Project Expo',
      description: 'Vishesh 2024 Participation',
      category: 'Competition'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition of my continuous learning and dedication to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.title} className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {achievement.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
