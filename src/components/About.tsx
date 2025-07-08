
import React from 'react';
import { Download, MapPin, Calendar, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = '1rrQntsexneCAJ_YIFyEeHfJMfeZzILmV';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'MANNEM_SUMANA_SRI_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a 3rd-year B.Tech student in Computer Science and Engineering at 
              <span className="text-primary font-semibold"> MallaReddy Deemed to be University</span>. 
              Passionate about building intelligent solutions and beautiful front-end experiences, 
              I've completed internships at Cognifyz (Python Developer) and Skilltimate (Junior Developer).
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in technology has been driven by curiosity and a desire to solve 
              real-world problems through code. I enjoy working on projects that combine 
              machine learning with practical applications, creating solutions that make 
              a difference.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Graduation</p>
                        <p className="text-sm text-muted-foreground">2027</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">India</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Languages className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Languages</p>
                        <p className="text-sm text-muted-foreground">English, Telugu, Hindi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="card-gradient border-border/50">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
