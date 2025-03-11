
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user has dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    // Add listener for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'header-fade shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight">JURNAL Regional</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            Beranda
          </Link>
          <Link 
            to="/articles" 
            className="font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            Artikel
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            Tentang Kami
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2" 
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect animate-in slide-down border-t border-border/30 shadow-lg">
          <div className="container py-6 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md font-medium hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/articles" 
              className="px-4 py-2 rounded-md font-medium hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Artikel
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md font-medium hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
