
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleContent from '@/components/ArticleContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, Article } from '@/lib/article-utils';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      
      try {
        const articleData = await getArticleBySlug(slug);
        setArticle(articleData);
      } catch (error) {
        console.error(`Failed to fetch article with slug ${slug}:`, error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticle();
  }, [slug]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </Layout>
    );
  }
  
  if (!article) {
    return (
      <Layout>
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/articles')}>
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/articles')} 
          className="mb-8 animate-in fade-in"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Button>
        
        <ArticleContent
          title={article.title}
          date={article.date}
          author={article.author}
          readingTime={article.readingTime}
          content={article.content}
        />
      </div>
    </Layout>
  );
};

export default ArticleDetail;
