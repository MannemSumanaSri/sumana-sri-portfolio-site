
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Libraries',
      skills: ['NumPy', 'Pandas', 'Matplotlib'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Domains',
      skills: ['Frontend Development', 'Machine Learning'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'Python', level: 85 },
              { skill: 'Frontend Development', level: 80 },
              { skill: 'Machine Learning', level: 75 },
              { skill: 'Git & Version Control', level: 70 }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
