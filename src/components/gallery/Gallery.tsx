import React from 'react';
import { Link } from 'react-router-dom';
import img01 from "@/assets/images/Mohamed_Ali_Mosque_HDR.jpg";
import img02 from "@/assets/images/قصر عابدين.jpg";
import img03 from "@/assets/images/قصر محمد علي بشبرا.jpeg";
import img04 from "@/assets/images/كوبري_امستعمرة_القناطر_الخيرية.jpg";


interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "قلعة محمد علي",
    description: "القلعة الشهيرة التي بناها محمد علي في القاهرة",
    image: img01
  },
  {
    id: "2",
    title: "قصر عابدين",
    description: "المقر الرئيسي للأسرة المالكة منذ القرن التاسع عشر",
    image: img02
  },
  {
    id: "3",
    title: "قصر محمد علي بشبرا (1808)",
    description: 'يقع القصر في شبرا الخيمة، ويُعرف أيضًا باسم "قصر الفسقية" لاحتوائه على نافورة كبيرة. بُني عام 1808 ويتميز بتصميم يجمع بين الطرازين الأوروبي والإسلامي.',
    image:img03
  },
  {
    id: "4",
    title:"القناطر الخيرية (1847)",
    description:" أنشأ محمد علي باشا القناطر الخيرية لتنظيم توزيع مياه النيل على الدلتا، وتُعد من أبرز مشاريع الري في عهده.",
    image: img04
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-royal-cream/30">
      <div className="royal-container">
        <h2 className="section-title">المعرض التاريخي</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <div key={item.id} className="group overflow-hidden royal-border bg-white">
              <div className="w-full aspect-square overflow-hidden rounded mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-royal-blue">{item.title}</h3>
                <p className="text-sm text-royal-gray mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/gallery" className="inline-block bg-royal-blue text-white font-bold py-3 px-6 rounded-md hover:bg-royal-blue/90 transition">
            عرض المعرض
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
