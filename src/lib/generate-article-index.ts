
// NOTE: This is a Node.js script to be run outside the browser
// Run with: npx ts-node src/lib/generate-article-index.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Calculate reading time based on content length
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

const generateArticleIndex = async () => {
  try {
    const dataDir = path.join(process.cwd(), 'public', 'data');
    
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      console.log('Creating data directory');
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Read all markdown files
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.md'));
    
    const articles = files.map(fileName => {
      // Skip index.json and README files
      if (fileName === 'index.json' || fileName === 'README.md') {
        return null;
      }

      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(dataDir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Parse frontmatter
      const { data, content } = matter(fileContent);
      
      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        author: data.author || 'Unknown',
        readingTime: data.readingTime || calculateReadingTime(content),
        tags: data.tags || []
      };
    }).filter(Boolean); // Remove null entries
    
    // Sort articles by date, newest first
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Write index file
    fs.writeFileSync(
      path.join(dataDir, 'index.json'),
      JSON.stringify(articles, null, 2)
    );
    
    console.log(`Successfully generated index.json with ${articles.length} articles`);
  } catch (error) {
    console.error('Error generating article index:', error);
  }
};

// Run the generator
generateArticleIndex();
