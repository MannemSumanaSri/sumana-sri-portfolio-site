
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Fake Profile Detection Using ANN',
      description: 'Built a machine learning model using Artificial Neural Networks and NLP to classify fake social media accounts. Developed and trained model on structured data with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Neural Networks', 'Pandas'],
      category: 'Machine Learning',
      gradient: 'from-purple-500 to-pink-500',
      githubUrl: 'https://github.com/MannemSumanaSri/fake-profile-detector-ANN',
      hasCode: true,
      hasDemo: false
    },
    {
      title: 'Offline Payments Website',
      description: 'Created an offline-first payment system using web technologies, QR scanning, and local storage. Enabled secure peer-to-peer payments without internet by syncing data later.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'QR Code', 'Local Storage'],
      category: 'Web Development',
      gradient: 'from-blue-500 to-cyan-500',
      githubUrl: null,
      hasCode: false,
      hasDemo: false
    }
  ];

  const handleViewAllProjects = () => {
    window.open('https://github.com/MannemSumanaSri', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work showcasing my skills in machine learning and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <CardHeader className="space-y-4">
                <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-2xl font-bold">{project.category}</div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  {project.hasCode && project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {!project.hasCode && !project.hasDemo && (
                    <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                      Work in Progress
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={handleViewAllProjects}>
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
