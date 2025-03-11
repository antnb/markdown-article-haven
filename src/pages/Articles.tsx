
import React from 'react';
import Layout from '@/components/layout/Layout';
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
  },
  {
    slug: 'markdown-for-developers',
    title: 'Markdown for Developers',
    description: 'How developers can use Markdown to improve documentation and project readability.',
    date: '2023-08-10',
    readingTime: '6 min read',
    author: 'Dev Writer'
  },
  {
    slug: 'creating-beautiful-documentation',
    title: 'Creating Beautiful Documentation with Markdown',
    description: 'Tips and tricks for creating stunning documentation using Markdown and modern tools.',
    date: '2023-09-05',
    readingTime: '8 min read',
    author: 'Documentation Expert'
  }
];

const Articles = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center animate-in fade-in">
              <h1 className="text-4xl font-bold mb-4">Articles</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of markdown articles on various topics
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleArticles.map((article, i) => (
                <ArticleCard 
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  readingTime={article.readingTime}
                  author={article.author}
                  className="animate-in scale-in"
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
