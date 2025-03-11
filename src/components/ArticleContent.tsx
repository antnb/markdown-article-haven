
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { CalendarIcon, Clock, User } from 'lucide-react';

interface ArticleContentProps {
  title: string;
  date: string;
  author?: string;
  readingTime?: string;
  content: string;
}

const ArticleContent = ({
  title,
  date,
  author = 'Anonymous',
  readingTime = '5 min read',
  content
}: ArticleContentProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="animate-in fade-in max-w-3xl mx-auto px-4 sm:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarIcon size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readingTime}</span>
          </div>
          
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </header>
      
      <div className="prose dark:prose-invert prose-lg mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ArticleContent;
