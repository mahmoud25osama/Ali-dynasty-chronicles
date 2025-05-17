import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1805",
    title: "تولي محمد علي الحكم",
    description: "تولى محمد علي منصب والي مصر العثماني، مؤسساً الأسرة الحاكمة."
  },
  {
    year: "1811",
    title: "القضاء على المماليك",
    description: "تم القضاء على المماليك فيما عُرف بمذبحة القلعة، مما عزز حكم محمد علي."
  },
  {
    year: "1820-1824",
    title: "فتح السودان",
    description: "قامت القوات المصرية بفتح السودان، موسعة أراضي الأسرة جنوباً."
  },
  {
    year: "1848",
    title: "حكم إبراهيم باشا القصير",
    description: "خلف إبراهيم باشا والده لكنه توفي بعد أشهر قليلة من توليه الحكم."
  },
  {
    year: "1863-1879",
    title: "حكم إسماعيل باشا",
    description: "شهدت مصر في عهد إسماعيل باشا تحديثاً كبيراً وتراكماً للديون."
  },
  {
    year: "1882",
    title: "الاحتلال البريطاني",
    description: "احتلت بريطانيا مصر، مما حد من سلطة الأسرة مع الإبقاء عليهم كحكام شكليين."
  }
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-event');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-16 bg-royal-cream/40 overflow-hidden">
      <div className="royal-container">
        <h2 className="section-title mb-16 text-center">الجدول الزمني للأسرة</h2>
        
        <div className="relative" ref={timelineRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-gold/20 via-royal-gold to-royal-gold/20"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className="timeline-event opacity-0 translate-x-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot with Ring Effect */}
                <div className="absolute right-2 translate-x-1/2 top-6 w-6 h-6">
                  <div className="absolute inset-0 bg-royal-gold rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-royal-gold rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className="mr-12 hover:bg-royal-cream/40 royal-border group hover:shadow-lg hover:border-royal-gold/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="inline-block py-1 px-4 rounded-full bg-royal-blue/10 text-royal-blue font-bold 
                      group-hover:bg-royal-blue group-hover:text-white transition-colors duration-300">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-royal-blue group-hover:scale-105 transition-transform duration-300">
                      {event.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-royal-gray/90 group-hover:text-royal-gray transition-colors duration-300">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/timeline" 
            className="inline-flex items-center gap-2 bg-royal-blue text-white font-bold 
                    py-3 px-8 rounded-lg hover:bg-royal-blue/90 transform hover:scale-105 
                    transition-all duration-300 shadow-md hover:shadow-lg"
          >
            عرض الجدول الزمني الكامل
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
