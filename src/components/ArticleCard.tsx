
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  author?: string;
  className?: string;
  index?: number;
}

const ArticleCard = ({
  slug,
  title,
  description,
  date,
  readingTime = '5 min read',
  author = 'Anonymous',
  className,
  index = 0
}: ArticleCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      to={`/article/${slug}`} 
      className={cn('article-card block', className)}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex flex-col h-full">
        <div className="mb-2 flex items-center">
          <span className="text-xs font-medium text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
            Article
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{readingTime}</span>
            </div>
            
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
