import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import PersonCard, { PersonProps } from '../components/family/PersonCard';
import { ArrowLeft } from 'lucide-react';
import img01 from "@/components/gallery/images/mohamed.jpeg";
import img02 from "@/components/gallery/images/img2.jpg";
import img03 from "@/components/gallery/images/img3.jpg";
import img04 from "@/components/gallery/images/img4.jpeg";
import img05 from "@/components/gallery/images/img5.jpeg";
import img06 from "@/components/gallery/images/img6.jpeg";
import img07 from "@/components/gallery/images/img7.jpeg";
import img08 from "@/components/gallery/images/img8.jpeg";

// Extended family members data with real historical images
const familyMembers: PersonProps[] = [
  {
    id: "mohamed-ali",
    name: "محمد علي باشا",
    title: "مؤسس الأسرة",
    years: "1769-1849",
    image: img01,
    description: "قائد ألباني في الجيش العثماني، أسس الأسرة التي حكمت مصر والسودان لما يقارب 150 عامًا."
  },
  {
    id: "ibrahim-pasha",
    name: "إبراهيم باشا",
    title: "الابن الأكبر وقائد عسكري",
    years: "1789-1848",
    image: img02,
    description: "الابن الأكبر لمحمد علي وأحد أبرز القادة العسكريين، قاد حملات ناجحة في الشام والأناضول."
  },
  {
    id: "abbas-helmi-i",
    name: "عباس حلمي الأول",
    title: "الحاكم الثالث للأسرة",
    years: "1812-1854",
    image: img03,
    description: "حفيد محمد علي، أوقف العديد من الإصلاحات وكان محافظًا في حكمه."
  },
  {
    id: "ismail-pasha",
    name: "إسماعيل باشا",
    title: "الخديوي العظيم",
    years: "1830-1895",
    image: img04,
    description: "حفيد محمد علي، شهدت مصر في عهده نهضة عمرانية وثقافية وافتتاح قناة السويس."
  },
  {
    id: "tewfik-pasha",
    name: "توفيق باشا",
    title: "ابن إسماعيل باشا",
    years: "1852-1892",
    image: img05,
    description: "ابن إسماعيل باشا، حكم مصر خلال فترة الاحتلال البريطاني."
  },
  {
    id: "hussein-kamel",
    name: "حسين كامل",
    title: "أول سلطان لمصر",
    years: "1853-1917",
    image: img07,
    description: "عُين سلطانًا على مصر من قبل البريطانيين، منهياً فترة الخديوية."
  },
  {
    id: "fuad-i",
    name: "فؤاد الأول",
    title: "ملك مصر",
    years: "1868-1936",
    image: img08,
    description: "أصبح سلطانًا بعد أخيه حسين كامل، ثم أول ملك لمصر بعد الاستقلال الاسمي."
  },
  {
    id: "abbas-helmi-ii",
    name: "عباس حلمي الثاني",
    title: "آخر خديوي فعلي",
    years: "1874-1944",
    image: img06,
    description: "آخر خديوي لمصر يتمتع بسلطة حقيقية قبل عزله من قبل البريطانيين."
  }
];

const Family = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      
      <main className="flex-grow">
        <div className="royal-container py-16">
          <h1 className="section-title mb-12">
            شجرة عائلة محمد علي باشا
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {familyMembers.map((member) => (
              <div key={member.id} className="flex flex-col h-full">
                <PersonCard {...member} />
                <Link
                  to={`/biography/${member.id}`}
                  className="mt-4 inline-block bg-royal-blue text-white font-bold py-2 px-4 rounded-md hover:bg-royal-blue/90 transition text-center"
                >
                  اعرض المزيد
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-6 bg-gray-50 border border-gray-200 rounded-lg">            <h2 className="text-xl font-bold text-royal-blue mb-4 font-arabic">
              عن الأسرة
            </h2>
            <p className="text-gray-700 mb-4 font-naskh">
              كانت أسرة محمد علي هي الأسرة الحاكمة لمصر والسودان من القرن التاسع عشر إلى منتصف القرن العشرين. وسميت باسم مؤسسها محمد علي باشا، وهو قائد ألباني في الجيش العثماني تم تعيينه نائباً للسلطان العثماني في مصر عام 1805.
            </p>
            <p className="text-gray-700">
              امتد حكم الأسرة عبر عدة فترات من تاريخ مصر: كولاية عثمانية مستقلة (1805-1867)، وكخديوية مصر المستقلة (1867-1914)، وكسلطنة مصر (1914-1922)، وأخيراً كمملكة مصر (1922-1953) قبل الإطاحة بها في الثورة المصرية عام 1952
            </p>
          </div>
          <Link to="/" className="mt-8 inline-block bg-royal-blue text-white font-bold py-2 px-6 rounded-md hover:bg-royal-blue/90 transition text-center text-lg">
            <ArrowLeft size={20} className="ml-2 inline" />
            العودة للرئيسية
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Family;
