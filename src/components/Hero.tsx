
import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Hi, I'm MANNEM SUMANA SRI –</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Aspiring{' '}
                <span className="gradient-text">Software Developer</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                & Machine Learning Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              B.Tech Computer Science student passionate about building intelligent solutions 
              and beautiful front-end experiences. Currently exploring the intersection of 
              AI and web development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Let's Talk
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/MannemSumanaSri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sumana-sri-227b53308" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mannemsumanasri@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-blue-400/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-card flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground">MSS</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-primary rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
