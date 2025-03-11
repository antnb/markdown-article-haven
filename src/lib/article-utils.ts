
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

// Simulated list of articles
const articleFiles = [
  'getting-started-with-markdown.md',
  'advanced-markdown-techniques.md',
  'markdown-for-developers.md'
];

// Get articles metadata
export const getArticles = async (): Promise<ArticleMetadata[]> => {
  try {
    const articles = await Promise.all(
      articleFiles.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const article = await getArticleBySlug(slug);
        if (!article) return null;
        
        // Return metadata only (without content)
        const { content, ...metadata } = article;
        return metadata;
      })
    );
    
    // Filter out null values and sort by date
    return articles
      .filter((article): article is ArticleMetadata => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting articles:', error);
    return [];
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
