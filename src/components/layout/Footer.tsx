import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-royal-blue to-royal-blue/90 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/components/gallery/images/innerBackground.jpg')] opacity-5 bg-cover bg-center"></div>
      <div className="royal-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="text-center md:text-right">            <h3 className="text-2xl font-bold mb-6 text-royal-gold font-arabic">
              أسرة محمد علي
            </h3>
            <p className="text-sm text-white/90 leading-relaxed font-naskh">
              استكشاف التاريخ الغني وإرث الأسرة التي شكلت مصر الحديثة من 1805 إلى 1953.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-6 text-royal-gold">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link">الرئيسية</Link>
              </li>
              <li>
                <Link to="/family" className="footer-link">شجرة العائلة</Link>
              </li>
              <li>
                <Link to="/timeline" className="footer-link">الجدول الزمني</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">المعرض</Link>
              </li>
              <li>
                <Link to="/#contact" className="footer-link">تواصل معنا</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-6 text-royal-gold">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3 group">
                <span className="text-sm text-white/90 group-hover:text-royal-gold transition-colors">
                  info@mohamedali-dynasty.com
                </span>
                <Mail className="w-5 h-5 text-royal-gold" />
              </div>
              <div className="flex items-center justify-end gap-3 group">
                <span className="text-sm text-white/90 group-hover:text-royal-gold transition-colors">
                  +20 123 456 789
                </span>
                <Phone className="w-5 h-5 text-royal-gold" />
              </div>
              <div className="flex items-center justify-end gap-3 group">
                <span className="text-sm text-white/90 group-hover:text-royal-gold transition-colors">
                  القاهرة، مصر
                </span>
                <MapPin className="w-5 h-5 text-royal-gold" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-sm text-white/70 hover:text-white/90 transition-colors">
              &copy; {currentYear} تاريخ أسرة محمد علي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
