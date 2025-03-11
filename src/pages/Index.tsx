
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, ArticleMetadata } from '@/lib/article-utils';

const Index = () => {
  const [featuredArticles, setFeaturedArticles] = useState<ArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await getArticles(1);
        // Get the two most recent articles
        setFeaturedArticles(result.articles.slice(0, 2));
      } catch (error) {
        console.error('Failed to fetch featured articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in">
            <div className="mb-4 inline-flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                <Calendar size={16} className="mr-1.5" />
                {currentDate}
              </span>
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                <Clock size={16} className="mr-1.5" />
                Edisi Terbaru
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
              JURNAL HARIAN REGIONAL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
              Sumber informasi terpercaya untuk berita dan artikel terkini dari berbagai wilayah regional, disajikan dengan format yang mudah dibaca.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in slide-up" style={{ '--index': 3 } as React.CSSProperties}>
              <Button asChild size="lg">
                <Link to="/articles">
                  Lihat Semua Artikel <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Tentang Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 bg-card/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold animate-in slide-up">Artikel Pilihan</h2>
                <p className="text-muted-foreground mt-2 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
                  Berita dan artikel terbaru dari jurnal harian kami
                </p>
              </div>
              <Button variant="ghost" asChild className="animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
                <Link to="/articles">
                  Lihat Semua <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <p className="text-muted-foreground">Memuat artikel...</p>
              </div>
            ) : featuredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Tidak ada artikel pilihan tersedia.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-up" style={{ '--index': 3 } as React.CSSProperties}>
                {featuredArticles.map((article, i) => (
                  <ArticleCard 
                    key={article.slug}
                    slug={article.slug}
                    title={article.title}
                    description={article.description}
                    date={article.date}
                    readingTime={article.readingTime}
                    author={article.author}
                    index={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 animate-in slide-up">Ingin membaca lebih banyak?</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-in slide-up" style={{ '--index': 1 } as React.CSSProperties}>
              Jelajahi koleksi lengkap artikel dan berita dari JURNAL Harian Regional kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in slide-up" style={{ '--index': 2 } as React.CSSProperties}>
              <Button asChild>
                <Link to="/articles">Lihat Semua Artikel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
