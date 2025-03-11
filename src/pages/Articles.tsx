
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, ArticleMetadata } from '@/lib/article-utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Articles = () => {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const result = await getArticles(currentPage);
        setArticles(result.articles);
        setTotalPages(result.totalPages);
        setCurrentPage(result.currentPage);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <p className="text-muted-foreground">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, i) => (
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
                
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12 space-x-2">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <div className="flex items-center px-4">
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
