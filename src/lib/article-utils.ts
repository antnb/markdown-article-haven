
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

// Configuration for pagination
const ARTICLES_PER_PAGE = 10;

// Get articles metadata with pagination
export const getArticles = async (page = 1): Promise<{
  articles: ArticleMetadata[];
  totalPages: number;
  currentPage: number;
}> => {
  try {
    // Fetch the article list from a directory index endpoint
    const response = await fetch('/data/index.json');
    
    if (!response.ok) {
      // If the index doesn't exist, try to scan the directory
      return await scanArticlesDirectory(page);
    }
    
    const allArticles = await response.json();
    
    // Sort articles by date (newest first)
    const sortedArticles = allArticles.sort(
      (a: ArticleMetadata, b: ArticleMetadata) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    // Calculate pagination
    const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const paginatedArticles = sortedArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
    
    return {
      articles: paginatedArticles,
      totalPages,
      currentPage: page
    };
  } catch (error) {
    console.error('Error getting articles:', error);
    // Fallback to directory scanning if the index fails
    return await scanArticlesDirectory(page);
  }
};

// Scan for articles by checking common files
const scanArticlesDirectory = async (page = 1): Promise<{
  articles: ArticleMetadata[];
  totalPages: number;
  currentPage: number;
}> => {
  try {
    // Try to fetch a list of sample articles to check first
    const sampleFiles = [
      'getting-started-with-markdown.md',
      'advanced-markdown-techniques.md',
      'markdown-for-developers.md'
    ];
    
    const articles = await Promise.all(
      sampleFiles.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        try {
          const article = await getArticleBySlug(slug);
          if (!article) return null;
          
          // Return metadata only (without content)
          const { content, ...metadata } = article;
          return metadata;
        } catch (error) {
          return null;
        }
      })
    );
    
    // Filter out null values and sort by date
    const validArticles = articles
      .filter((article): article is ArticleMetadata => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Calculate pagination
    const totalPages = Math.ceil(validArticles.length / ARTICLES_PER_PAGE);
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const paginatedArticles = validArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
    
    return {
      articles: paginatedArticles,
      totalPages: Math.max(1, totalPages),
      currentPage: page
    };
  } catch (error) {
    console.error('Error scanning articles directory:', error);
    return {
      articles: [],
      totalPages: 1,
      currentPage: page
    };
  }
};

// Get a specific article by slug
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    // Fetch the markdown file
    const response = await fetch(`/data/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }
    
    const fileContent = await response.text();
    return parseMarkdown(fileContent, slug);
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
