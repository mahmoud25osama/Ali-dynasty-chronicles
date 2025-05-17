import React, { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import  logo  from "../gallery/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavClick = (path: string, e: React.MouseEvent) => {
      if (path.startsWith('/#')) {
        e.preventDefault();
        const sectionId = path.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (location.pathname === path && path === '/') {
        e.preventDefault();
        scrollToTop();
      }
    };

    const navLinks = [
        { title: 'الرئيسية', path: '/' },
        { title: 'العائلة', path: '/family' },
        { title: 'الجدول الزمني', path: '/timeline' },
        { title: 'المعرض', path: '/gallery' },
        { title: 'تواصل معنا', path: '/#contact' },
    ];

    return (        <nav className={`fixed top-0 left-0 right-0 z-50 font-medium font-naskh py-2 transition-all duration-500 ${
            isScrolled ? 'bg-royal-cream/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="royal-container flex items-center justify-between">
                <Link 
                    to="/" 
                    onClick={(e) => handleNavClick('/', e)}
                    className="flex items-center gap-2"
                >
                    <img src={logo} className="w-10 md:w-14 h-12 md:h-14 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer" alt="شعار أسرة محمد علي" />
                    <div className="flex flex-col">                        <span className="text-lg font-bold text-royal-blue font-arabic">محمد علي</span>
                        <span className="text-xs text-royal-gray font-naskh">أسرة محمد علي</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 space-x-8">
                    {navLinks.map((link) => (                <Link
                            key={link.path}
                            to={link.path}
                            onClick={(e) => handleNavClick(link.path, e)}
                            className="nav-btn font-arabic"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleMenu}
            className="text-royal-cream hover:text-royal-blue"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full top-16 left-0 shadow-md animate-fade-in z-50">
          <div className="royal-container py-4 flex flex-col space-y-4">            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-royal-gray font-arabic hover:text-royal-blue font-medium transition duration-200 py-2 border-b border-gray-100"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



