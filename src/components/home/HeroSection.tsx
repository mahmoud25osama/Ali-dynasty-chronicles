import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative  text-royal-cream">
      {/* Hero Section */}
      <section id="home">
        <div className="royal-container relative z-10 py-20 md:py-32">
          <div className=" max-w-3xl ">
          
              <h1 className="son text-4xl md:text-6xl font-bold mb-4 pt-3 font-naskh">
                أسرة
              <div>
                <span className='text-royal-blue '>محمد على باشا </span>
                </div>
              </h1>
              <p className="font-naskh text-xl md:text-2xl opacity-90 mb-8">
                اكتشف إرث العائلة التي شكلت مصر الحديثة
              </p>
            
            <div className="flex flex-col md:pr-5 lg:pr-5 px-2 sm:flex-row gap-4">
              <Link 
                to="/family" 
                className="bg-royal-gold text-royal-blue font-bold py-4 px-10 text-lg md:text-xl rounded-lg hover:bg-royal-gold/90 transition text-center shadow-lg">
                شجرة العائلة
              </Link>
              <Link 
                to="/timeline" 
                className="hero-btn hero-btn-secondary py-4 px-10 text-lg md:text-xl rounded-lg shadow-lg">
                عرض الجدول الزمني
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
