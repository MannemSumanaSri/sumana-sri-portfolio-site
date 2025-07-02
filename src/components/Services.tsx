import React from 'react';
import { Code, Brain, FileCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Responsive websites with modern UI/UX design and clean, maintainable code.',
      features: ['Responsive Design', 'Modern Frameworks', 'Clean Code', 'Performance Optimization'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Brain,
      title: 'ML Solutions',
      description: 'Smart ML models for automation and analysis to solve real-world problems.',
      features: ['Data Analysis', 'Predictive Models', 'Neural Networks', 'NLP Solutions'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: FileCode,
      title: 'Python Projects',
      description: 'Powerful Python Solutions for Modern Applications',
      features: ['Data Processing', 'Automation Scripts', 'API Development', 'Algorithm Implementation'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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

export default Services;
