
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

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

// Read all markdown files from the data directory
export const getArticles = async (): Promise<ArticleMetadata[]> => {
  try {
    const articlesDirectory = path.join(process.cwd(), 'data');
    const fileNames = fs.readdirSync(articlesDirectory);
    
    const articles = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        // Remove .md extension to get slug
        const slug = fileName.replace(/\.md$/, '');
        
        // Read file content
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse frontmatter
        const { data } = matter(fileContents);
        
        // Return article metadata
        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
          author: data.author,
          readingTime: data.readingTime || calculateReadingTime(fileContents),
          tags: data.tags || [],
        };
      });
    
    // Sort articles by date (newest first)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting articles:', error);
    return [];
  }
};

// Get a specific article by slug
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    const fullPath = path.join(process.cwd(), 'data', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    return parseMarkdown(fileContents, slug);
  } catch (error) {
    console.error(`Error getting article with slug ${slug}:`, error);
    return null;
  }
};

// Parse markdown content and extract frontmatter
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

// Calculate reading time based on content length
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};
