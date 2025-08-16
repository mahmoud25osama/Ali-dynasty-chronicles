import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import img01 from "@/assets/images/Mohamed_Ali_Mosque_HDR.jpg";
import img02 from "@/assets/images/قصر عابدين.jpg";
import img03 from "@/assets/images/مسجد-الرفاعى.jpg";
import img04 from "@/assets/images/40495-احتفالات-قناة-السويس-1869_.jpg";
import img05 from "@/assets/images/العربة.jpg";
import img06 from "@/assets/images/مسجد_محمد_علي_بقلعة_صلاح_الدين_-_23.jpg";
import img07 from "@/assets/images/منتزه.jpg";
import img08 from "@/assets/images/كوبري_القناطر_الخيرية_وروعتها.jpg";


interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "قلعة محمد علي",
    description: "القلعة الشهيرة التي بنيت خلال حكم محمد علي في القاهرة",
    image: img01,
    category: "architecture"
  },
  {
    id: "2",
    title: "قصر عابدين",
    description: "المقر الرئيسي للعائلة الملكية منذ القرن التاسع عشر",
    image:img02,
    category: "architecture"
  },
  {
    id: "3",
    title: "مسجد الرفاعي",
    description: "المسجد الملكي حيث دفن العديد من أفراد الأسرة",
    image: img03,
    category: "architecture"
  },
  {
    id: "4",
    title: "افتتاح قناة السويس",
    description: "صورة تاريخية من افتتاح قناة السويس عام 1869",
    image: img04,
    category: "culture"
  },
  {
    id: "5",
    title: "العربة الملكية المصرية",
    description: "العربة الملكية المستخدمة خلال فترة الأسرة",
    image:img05,
    category: "culture"
  },
  {
    id: "6",
    title: "مسجد محمد علي",
    description: "المسجد الألباستر الذي بناه محمد علي باشا",
    image: img06,
    category: "architecture"
  },
  {
    id: "7",
    title: "قصر المنتزه",
    description: "القصر الصيفي الذي بناه الملك فؤاد ووسعه الملك فاروق",
    image:img07,
    category: "interiors"
  },
  {
    id: "8",
    title: "القناطر الخيرية (1847)",
    description: " أنشأ محمد علي باشا القناطر الخيرية لتنظيم توزيع مياه النيل على الدلتا، وتُعد من أبرز مشاريع الري في عهده.",
    image:img08,
    category: "architecture"
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  
  
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory && selectedCategory !== 'all'
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;
    
  return (
    <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-2 md:pt-5">
        <div className=" bg-royal-blue text-white py-20" >
          <div className="royal-container">            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 font-arabic">
              المعرض التاريخي
            </h1>
            <p className="text-xl opacity-90 font-naskh">
              استكشف صور من عصر أسرة محمد علي
            </p>
          </div>
        </div>
        
        <div className="royal-container py-12">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category || (category === 'all' && !selectedCategory)
                    ? 'bg-royal-blue text-white'
                    : 'bg-gray-100 text-royal-gray hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'الكل'
                  : category === 'architecture' ? 'العمارة'
                  : category === 'culture' ? 'الثقافة'
                  : 'التصميم الداخلي'}
              </button>
            ))}
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id}
                onClick={() => setActiveImage(image)}
                className="royal-border bg-white cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">                  <h3 className="text-lg font-bold text-royal-blue font-arabic">
                    {image.title}
                  </h3>
                  <p className="text-sm text-royal-gray mt-1 font-naskh">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        <Link to="/" className="mt-8 inline-block bg-royal-blue text-white font-bold py-2 px-6 rounded-md hover:bg-royal-blue/90 transition text-center text-lg">
        <ArrowLeft size={20} className="ml-2 inline" />
        العودة للرئيسية
        </Link>
        </div>
      </main>
      
      {/* Lightbox for larger image view */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="bg-white max-w-4xl rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-royal-blue">
                {activeImage.title}
              </h3>
              <p className="text-royal-gray mt-1">
                {activeImage.description}
              </p>
            </div>
          </div>
          <button 
            className="absolute top-4 left-4 text-white hover:text-royal-gold"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
