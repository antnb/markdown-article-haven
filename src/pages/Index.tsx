
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ArticleCard';

const exampleArticles = [
  {
    slug: 'getting-started-with-markdown',
    title: 'Getting Started with Markdown',
    description: 'Learn the basics of Markdown syntax and how to write beautiful documents.',
    date: '2023-06-15',
    readingTime: '4 min read',
    author: 'Markdown Master'
  },
  {
    slug: 'advanced-markdown-techniques',
    title: 'Advanced Markdown Techniques',
    description: 'Take your Markdown skills to the next level with these advanced tips and tricks.',
    date: '2023-07-22',
    readingTime: '7 min read',
    author: 'Syntax Pro'
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in">
            <div className="mb-4 inline-block">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                <BookOpen size={16} className="mr-1.5" />
                Beautiful Markdown Articles
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
              Elegant Markdown Article Haven
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
              A minimalist platform for reading beautifully formatted markdown articles with a focus on readability and elegance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in slide-up" style={{ '--index': 3 } as React.CSSProperties}>
              <Button asChild size="lg">
                <Link to="/articles">
                  Browse Articles <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold animate-in slide-up">Featured Articles</h2>
                <p className="text-muted-foreground mt-2 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
                  Explore our hand-picked collection of markdown articles
                </p>
              </div>
              <Button variant="ghost" asChild className="animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
                <Link to="/articles">
                  View All <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-up" style={{ '--index': 3 } as React.CSSProperties}>
              {exampleArticles.map((article, i) => (
                <ArticleCard 
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  readingTime={article.readingTime}
                  author={article.author}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 animate-in slide-up">Ready to dive deeper?</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
              Explore our complete collection of articles or learn more about our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
              <Button asChild>
                <Link to="/articles">Browse All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
