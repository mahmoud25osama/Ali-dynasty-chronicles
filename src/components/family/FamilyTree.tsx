
import React from 'react';
import { Link } from 'react-router-dom';
import PersonCard, { PersonProps } from './PersonCard';
import { url } from 'inspector';
import img01 from "@/components/gallery/images/mohamed.jpeg";
import img02 from "@/components/gallery/images/img2.jpg";
import img03 from "@/components/gallery/images/img3.jpg";
import img04 from "@/components/gallery/images/img4.jpeg";

const familyMembers: PersonProps[] = [
  {
    id: "mohamed-ali",
    name: "محمد علي باشا",
    title: "مؤسس السلالة",
    years: "1769-1849",
    image: img01,
    description: "محمد علي باشا هو والي مصر ومؤسس أسرة محمد علي التي حكمت مصر من أوائل القرن الـ19 حتى منتصف القرن ال20 "
  },
  {
    id: "ibrahim-pasha",
    name: "إبراهيم باشا",
    title: "قائد عسكري وولي عهد محمد علي",
    years: "1789-1848",
    image: img02,
    description: "ابن محمد علي باشا، وأحد أبرز القادة العسكريين في التاريخ المصري الحديث. قاد حملات عسكرية ناجحة في الشام والأناضول، وكان نائباً لوالده في حكم مصر."
  },
  {
    id: "abbas-helmi-i",
    name: "عباس حلمي الأول",
    title: "والي مصر",
    years: "1812-1854",
    image: img03,
    description: "هو حفيد محمد علي باشا، تولى الحكم بعد وفاة إبراهيم باشا. عرف بسياسة محافظة وتقليل النفوذ الأجنبي في مصر"
  },
  {
    id: "ismail-pasha",
    name: "الخديوي إسماعيل",
    title: "خديوي مصر والسودان",
    years: "1830-1895",
    image: img04,
    description: "هو حفيد محمد علي باشا، وواحد من أبرز حكام مصر في القرن الـ19. شهدت مصر في عهده نهضة عمرانية وثقافية، وتم افتتاح قناة السويس."
  }
];

const FamilyTree = () => {
  return (
    <section className="py-16">
      <div className="royal-container">
        <h2 className="section-title">أفراد العائلة البارزين</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {familyMembers.map((member) => (
            <PersonCard key={member.id} {...member} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/family" className="inline-block bg-royal-blue text-white font-bold py-3 px-6 rounded-md hover:bg-royal-blue/90 transition">
            عرض شجرة العائلة
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyTree;
