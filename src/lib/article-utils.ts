
import matter from 'gray-matter';

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Article extends ArticleMetadata {
  content: string;
}

// This function would be replaced with actual fetch logic in a Next.js implementation
export const getArticles = async (): Promise<ArticleMetadata[]> => {
  // For this React demo, we'll return an empty array
  // In a real Next.js app, this would read from the filesystem
  return [];
};

// This function would be replaced with actual fetch logic in a Next.js implementation
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  // For this React demo, we'll return null
  // In a real Next.js app, this would read the specific file
  return null;
};

// This is here for when we implement it with Next.js
export const parseMarkdown = (fileContent: string, slug: string): Article => {
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    author: data.author,
    readingTime: data.readingTime || calculateReadingTime(content),
    tags: data.tags || [],
    content
  };
};

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};
