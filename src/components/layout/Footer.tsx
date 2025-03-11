
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/30 py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">JURNAL Harian Regional</h3>
            <p className="text-muted-foreground max-w-md">
              Sumber informasi terpercaya untuk berita dan artikel terkini dari berbagai wilayah regional, disajikan dengan format yang mudah dibaca.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/20">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} JURNAL Harian Regional. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
