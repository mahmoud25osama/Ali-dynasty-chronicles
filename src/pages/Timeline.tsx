import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1769",
    title: "ولادة محمد علي",
    description: "ولد محمد علي في كافالا، الإمبراطورية العثمانية (اليونان حالياً).",
    category: "شخصي"
  },
  {
    year: "1801",
    title: "الوصول إلى مصر",
    description: "وصل محمد علي إلى مصر كجزء من القوات العثمانية المرسلة لطرد جيش نابليون.",
    category: "عسكري"
  },
  {
    year: "1805",
    title: "تولي السلطة",
    description: "تم تعيين محمد علي والياً عثمانياً على مصر، مؤسساً الأسرة الحاكمة.",
    category: "سياسي"
  },
  {
    year: "1811",
    title: "مذبحة القلعة",
    description: "تمت تصفية المماليك في مذبحة القلعة، مما عزز حكم محمد علي.",
    category: "سياسي"
  },
  {
    year: "1820-1824",
    title: "غزو السودان",
    description: "غزت القوات المصرية السودان، موسعة أراضي الأسرة جنوباً.",
    category: "عسكري"
  },
  {
    year: "1825-1828",
    title: "الثورة اليونانية",
    description: "أرسل محمد علي قوات لدعم الإمبراطورية العثمانية ضد الثورة اليونانية.",
    category: "عسكري"
  },
  {
    year: "1831-1833",
    title: "الحرب السورية الأولى",
    description: "غزت القوات المصرية بقيادة إبراهيم باشا سوريا وفتحتها.",
    category: "عسكري"
  },
  {
    year: "1839-1841",
    title: "الحرب السورية الثانية",
    description: "تدخلت القوى الأوروبية لإجبار مصر على الانسحاب من سوريا، مما حد من قوة محمد علي.",
    category: "عسكري"
  },
  {
    year: "1848",
    title: "حكم إبراهيم باشا القصير",
    description: "خلف إبراهيم باشا والده لكنه توفي بعد أشهر قليلة من توليه السلطة.",
    category: "سياسي"
  },
  {
    year: "1849",
    title: "وفاة محمد علي",
    description: "توفي محمد علي باشا في الإسكندرية، مصر.",
    category: "شخصي"
  },
  {
    year: "1863-1879",
    title: "حكم إسماعيل باشا",
    description: "شهدت مصر في عهد إسماعيل باشا تحديثاً كبيراً وتراكماً للديون.",
    category: "سياسي"
  },
  {
    year: "1869",
    title: "افتتاح قناة السويس",
    description: "تم افتتاح قناة السويس في عهد إسماعيل باشا، مما زاد من أهمية مصر الاستراتيجية.",
    category: "تطوير"
  },
  {
    year: "1882",
    title: "الاحتلال البريطاني",
    description: "احتلت بريطانيا مصر، مما حد من سلطة الأسرة مع إبقائهم كحكام شكليين.",
    category: "سياسي"
  },
  {
    year: "1914-1922",
    title: "الحماية البريطانية",
    description: "أصبحت مصر محمية بريطانية خلال الحرب العالمية الأولى.",
    category: "سياسي"
  },
  {
    year: "1922",
    title: "الاستقلال",
    description: "حصلت مصر على استقلال اسمي تحت حكم الملك فؤاد الأول، مع استمرار النفوذ البريطاني.",
    category: "سياسي"
  },
  {
    year: "1936",
    title: "المعاهدة المصرية البريطانية",
    description: "قللت المعاهدة من الوجود العسكري البريطاني لكنها أبقت على بعض الامتيازات.",
    category: "سياسي"
  },
  {
    year: "1952",
    title: "الثورة المصرية",
    description: "أطاحت حركة الضباط الأحرار بالملك فاروق، منهية الملكية.",
    category: "سياسي"
  },
  {
    year: "1953",
    title: "إعلان الجمهورية",
    description: "تم إعلان مصر جمهورية، منهياً رسمياً حكم أسرة محمد علي.",
    category: "سياسي"
  }
];

const TimelinePage = () => {
  const [filter, setFilter] = React.useState<string | null>(null);
  
  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'سياسي', label: 'سياسي' },
    { id: 'عسكري', label: 'عسكري' },
    { id: 'شخصي', label: 'شخصي' },
    { id: 'تطوير', label: 'تطوير' }
  ];
  
  const filteredEvents = filter && filter !== 'all'
    ? timelineEvents.filter(event => event.category === filter)
    : timelineEvents;

  return (
    <div className="min-h-screen flex flex-col rtl">
      
      <main className="flex-grow pt-20 md:pt-24">
        <div className="bg-royal-blue/90 backdrop-blur-sm text-white py-20">
          <div className="royal-container">            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in font-arabic">
              الخط الزمني للأسرة
            </h1>
            <p className="text-xl opacity-90 animate-fade-in-up font-naskh">
              التسلسل الزمني لتاريخ أسرة محمد علي من 1805 حتى 1953
            </p>
          </div>
        </div>
        
        <div className="royal-container py-12">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id === 'all' ? null : category.id)}
                className={`category-btn ${
                  (category.id === 'all' && !filter) || category.id === filter
                    ? 'active'
                    : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative space-y-8" >
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className="timeline-item"
                data-index={index}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.description}</p>
              </div>
            ))}
          </div>
          
          <Link 
            to="/" 
            className="mt-12 inline-flex items-center gap-2 bg-royal-blue text-white 
                      font-bold py-3 px-8 rounded-lg hover:bg-royal-blue/90 
                      transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={20} />
            العودة للرئيسية
          </Link>
        </div>
      </main>
      
    </div>
  );
};

export default TimelinePage;
