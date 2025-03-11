
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { BookOpen, Code, Feather, Layout as LayoutIcon } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12 animate-in fade-in">
              <h1 className="text-4xl font-bold mb-4">About Article Haven</h1>
              <p className="text-xl text-muted-foreground">
                A beautiful platform for reading markdown articles
              </p>
            </header>
            
            <div className="prose dark:prose-invert mx-auto animate-in slide-up">
              <p>
                Article Haven is a minimalist platform designed to showcase markdown articles
                with an emphasis on elegant design, typography, and readability. Inspired by the 
                design principles that prioritize simplicity, functionality, and user experience.
              </p>
              
              <p>
                This platform demonstrates how beautiful static content can be when presented
                thoughtfully, with attention to typography, spacing, and smooth animations.
              </p>
              
              <h2>Our Philosophy</h2>
              
              <p>
                We believe that reading online should be a pleasant experience. Too often,
                websites are cluttered with distractions, making it difficult to focus on
                the content. Article Haven takes a different approach, putting the content
                first and surrounding it with a clean, distraction-free interface.
              </p>
              
              <h2>Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <Card className="p-6 animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Markdown Support</h3>
                    <p className="text-muted-foreground">
                      Full support for GitHub-flavored Markdown, including tables, code blocks, and more.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 animate-in slide-up" style={{ '--index': 3 } as React.CSSProperties}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <LayoutIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Minimalist Design</h3>
                    <p className="text-muted-foreground">
                      Clean, distraction-free reading experience with a focus on typography and spacing.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 animate-in slide-up" style={{ '--index': 4 } as React.CSSProperties}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Feather className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Beautiful Typography</h3>
                    <p className="text-muted-foreground">
                      Carefully crafted typography that makes reading long-form content a pleasure.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 animate-in slide-up" style={{ '--index': 5 } as React.CSSProperties}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Code Highlighting</h3>
                    <p className="text-muted-foreground">
                      Syntax highlighting for code blocks to make technical articles more readable.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="prose dark:prose-invert mx-auto animate-in slide-up" style={{ '--index': 6 } as React.CSSProperties}>
              <h2>Technical Details</h2>
              
              <p>
                Article Haven is built using modern web technologies:
              </p>
              
              <ul>
                <li>React for the UI framework</li>
                <li>Tailwind CSS for styling</li>
                <li>React Markdown for rendering markdown content</li>
                <li>React Router for navigation</li>
                <li>Lucide React for icons</li>
              </ul>
              
              <p>
                The platform is designed to be easily deployable to platforms like GitHub Pages,
                providing a seamless way to share markdown content with the world.
              </p>
              
              <h2>Get Started</h2>
              
              <p>
                Ready to dive in? Head over to our <a href="/articles">Articles</a> section to 
                explore our collection of markdown articles. Each article demonstrates the capabilities
                of our platform while providing valuable content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
