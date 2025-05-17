import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import img01 from "@/components/gallery/images/mohamed.jpeg";
import img02 from "@/components/gallery/images/img2.jpg";
import img03 from "@/components/gallery/images/img3.jpg";
import img04 from "@/components/gallery/images/img4.jpeg";
import img05 from "@/components/gallery/images/img5.jpeg";
import img06 from "@/components/gallery/images/img6.jpeg";
import img07 from "@/components/gallery/images/img7.jpeg";
import img08 from "@/components/gallery/images/img8.jpeg";

// Sample biography data with real historical images and Arabic translations
const biographies = {
  "mohamed-ali": {
    name: "محمد علي باشا",
    title: "مؤسس الأسرة",
    years: "١٧٦٩-١٨٤٩",
    image: img01,
    birthplace: "كافالا، الإمبراطورية العثمانية (اليونان حالياً)",
    fullDescription: [
      "ولد محمد علي باشا عام 1769 في ما يعرف الآن باليونان، وارتقى من بدايات متواضعة ليصبح أحد أكثر الشخصيات تأثيراً في تاريخ مصر. يشار إليه غالباً باسم 'مؤسس مصر الحديثة'، حيث أسس أسرة حاكمة استمرت في حكم البلاد حتى منتصف القرن العشرين.",
      "أرسل في الأصل إلى مصر كجزء من قوة عثمانية لطرد جيش نابليون، انتهز محمد علي الفرصة ليؤسس نفسه كحاكم للبلاد. وبحلول عام 1805، تم تعيينه نائباً للسلطان العثماني في مصر، مما مثل بداية حكم أسرته.",
      "تميز عهده بجهود تحديث طموحة. قام بإصلاح الجيش، وأنشأ مؤسسات تعليمية حديثة، وأحيا الزراعة من خلال مشاريع الري، وطور صناعات مثل المنسوجات والأسلحة.",
      "ربما كان أشهر أعماله هو القضاء على المماليك في عام 1811، المعروف باسم مذبحة القلعة، والتي أزاحت منافسيه الرئيسيين وعززت سلطته.",
      "امتدت طموحات محمد علي الإقليمية إلى ما وراء مصر حيث غزا السودان وأجزاء من الجزيرة العربية وبلاد الشام، وهدد السلطان العثماني نفسه. كانت نجاحاته العسكرية كبيرة لدرجة أن القوى الأوروبية تدخلت للحد من توسعه.",
      "بحلول وفاته عام 1849، كان محمد علي قد حول مصر من ولاية عثمانية مهملة إلى دولة شبه مستقلة ذات نفوذ إقليمي كبير. استمر إرثه في التحديث وبناء المؤسسات من خلال أحفاده وشكل مسار التاريخ المصري لأجيال قادمة."
    ],
    achievements: [
      "إصلاحات عسكرية وإنشاء جيش حديث",
      "إصلاحات تعليمية شملت إرسال الطلاب إلى أوروبا",
      "إصلاحات زراعية تركز على المحاصيل النقدية مثل القطن",
      "التنمية الصناعية ومشاريع البنية التحتية",
      "التوسع الإقليمي بما في ذلك غزو السودان"
    ]
  },
  "ibrahim-pasha": {
    name: "إبراهيم باشا",
    title: "الوريث والقائد العسكري",
    years: "1789-1848",
    image:img02,
    birthplace: "كافالا، الإمبراطورية العثمانية (اليونان حالياً)",
    fullDescription: [
      "إبراهيم باشا، الابن الأكبر لمحمد علي باشا، ولد عام 1789 في كافالا (في اليونان حالياً). اشتهر كأحد أكثر القادة العسكريين كفاءة في عصره ولعب دوراً حاسماً في ترسيخ سلطة والده.",
      "على عكس العديد من الورثة الذين يحصلون على السلطة من خلال الميراث فقط، أثبت إبراهيم نفسه كإستراتيجي وقائد عسكري بارع. قاد الجيش المصري في غزو السودان والجزيرة العربية وسوريا، موسعاً الأراضي والنفوذ المصري بشكل كبير.",
      "كانت حملته الأكثر شهرة ضد الإمبراطورية العثمانية في سوريا (1831-1840)، حيث أظهر مهارة عسكرية ملحوظة. هزمت قواته الجيش العثماني مراراً وتقدمت حتى قونية في الأناضول، مهددة القسطنطينية نفسها. تدخلت القوى الأوروبية في النهاية لوقف تقدمه.",
      "خلف إبراهيم والده لفترة وجيزة في عام 1848 عندما أصبح محمد علي عاجزاً بسبب المرض. ومع ذلك، استمر حكمه بضعة أشهر فقط قبل وفاته في نوفمبر 1848، قبل وفاة والده بفترة قصيرة في عام 1849.",
      "على الرغم من فترة حكمه القصيرة، كانت إنجازات إبراهيم العسكرية وقدراته الإدارية حاسمة في ترسيخ قوة الأسرة وتأمين وضع مصر شبه المستقل داخل الإمبراطورية العثمانية."
    ],
    achievements: [
      "النصر في الحرب المصرية العثمانية (1831-1833)",
      "غزو السودان وأجزاء من الجزيرة العربية",
      "إدارة سوريا خلال الاحتلال المصري",
      "تحديث التكتيكات والتدريب العسكري",
      "حكم قصير كنائب أثناء مرض والده"
    ]
  },
  "abbas-helmi-i": {
    name: "عباس حلمي الأول",
    title: "الحاكم الثالث للأسرة",
    years: "1812-1854",
    image: img03,
    birthplace: "القاهرة، مصر",
    fullDescription: [
      "عباس حلمي الأول هو حفيد محمد علي باشا. تولى الحكم بعد وفاة عمه إبراهيم باشا. كان محافظًا في سياساته، أوقف العديد من الإصلاحات، وقلل من النفوذ الأوروبي في مصر. اغتيل في قصره عام 1854."
    ],
    achievements: [
      "تولي الحكم بعد إبراهيم باشا",
      "سياسة محافظة وتقليل النفوذ الأوروبي",
      "اغتيل في قصره عام 1854"
    ]
  },
  "ismail-pasha": {
  name: "إسماعيل باشا",
  title: "الخديوي العظيم",
  years: "1830-1895",
  image:img04,
  birthplace: "القاهرة، مصر",
  fullDescription: [
    "إسماعيل باشا هو حفيد محمد علي باشا، تولى حكم مصر عام 1863 حتى 1879. عُرف بطموحه الكبير لتحديث مصر على النمط الأوروبي، فشهدت البلاد في عهده نهضة عمرانية وثقافية ضخمة، وتم في عهده افتتاح قناة السويس عام 1869.",
    "وسع إسماعيل حدود القاهرة، وأدخل الكهرباء والترام، وأنشأ العديد من المدارس والمؤسسات الحديثة. لكنه تسبب في تراكم ديون ضخمة على مصر، مما أدى إلى تدخل القوى الأوروبية وعزله عن الحكم عام 1879.",
    "رغم نهايته السياسية، يُعتبر عهده من أكثر الفترات تأثيراً في تحديث مصر وتغيير ملامحها العمرانية والاجتماعية."
  ],
  achievements: [
    "افتتاح قناة السويس عام 1869",
    "توسعة وتحديث القاهرة والإسكندرية",
    "إدخال الكهرباء والترام",
    "تأسيس مدارس ومؤسسات حديثة",
    "توسيع الجيش وتحديثه"
  ]
},
"tewfik-pasha": {
  name: "توفيق باشا",
  title: "ابن إسماعيل باشا",
  years: "1852-1892",
  image:img05,
  birthplace: "القاهرة، مصر",
  fullDescription: [
    "توفيق باشا هو ابن إسماعيل باشا، تولى حكم مصر من 1879 حتى 1892. شهدت مصر في عهده الثورة العرابية عام 1882، والتي انتهت بتدخل بريطانيا وبدء الاحتلال البريطاني لمصر.",
    "كان حكمه في ظل السيطرة البريطانية، حيث فقدت مصر الكثير من استقلالها الفعلي. توفيق باشا توفي في حلوان عام 1892."
  ],
  achievements: [
    "حكم مصر خلال بداية الاحتلال البريطاني",
    "شهد الثورة العرابية",
    "محاولة الحفاظ على استقرار البلاد في ظروف صعبة"
  ]
},
"hussein-kamel": {
  name: "حسين كامل",
  title: "أول سلطان لمصر",
  years: "1853-1917",
  image: img06,
  birthplace: "القاهرة، مصر",
  fullDescription: [
    "حسين كامل هو ابن إسماعيل باشا، عُين سلطانًا على مصر من قبل البريطانيين عام 1914 بعد إعلان الحماية البريطانية على مصر، منهياً فترة الخديوية.",
    "حكم حتى وفاته عام 1917، وكان أول من حمل لقب سلطان مصر في العصر الحديث."
  ],
  achievements: [
    "أول سلطان لمصر بعد إعلان الحماية البريطانية",
    "حكم مصر خلال الحرب العالمية الأولى"
  ]
},
"fuad-i": {
  name: "فؤاد الأول",
  title: "ملك مصر",
  years: "1868-1936",
  image: img07,
  birthplace: "القاهرة، مصر",
  fullDescription: [
    "فؤاد الأول هو ابن إسماعيل باشا، أصبح سلطانًا بعد وفاة أخيه حسين كامل، ثم أصبح أول ملك لمصر بعد إعلان المملكة عام 1922.",
    "شهدت مصر في عهده تطورات سياسية ودستورية هامة، منها إصدار أول دستور مصري عام 1923، وتأسيس الجامعة المصرية (جامعة القاهرة)."
  ],
  achievements: [
    "أول ملك لمصر بعد إعلان المملكة",
    "إصدار دستور 1923",
    "تأسيس الجامعة المصرية (جامعة القاهرة)"
  ]
},
"abbas-helmi-ii": {
  name: "عباس حلمي الثاني",
  title: "آخر خديوي فعلي",
  years: "1874-1944",
  image: img08,
  birthplace: "الإسكندرية، مصر",
  fullDescription: [
    "عباس حلمي الثاني هو آخر خديوي لمصر يتمتع بسلطة حقيقية. تولى الحكم عام 1892 حتى 1914، وحاول مقاومة النفوذ البريطاني، لكنه عُزل عام 1914 مع إعلان الحماية البريطانية على مصر.",
    "عُرف بدعمه للحركة الوطنية المصرية، وساهم في تأسيس العديد من الجمعيات والمؤسسات الوطنية. عاش بقية حياته في المنفى وتوفي في سويسرا عام 1944."
  ],
  achievements: [
    "آخر خديوي فعلي لمصر",
    "دعم الحركة الوطنية المصرية",
    "تأسيس جمعيات ومؤسسات وطنية"
  ]
}
  // Additional biographies could be added here
};

const Biography = () => {
  const { id } = useParams<{ id: string }>();
  const biography = id ? biographies[id as keyof typeof biographies] : null;
  
  if (!biography) {
    return (
      <div className={`min-h-screen flex flex-col  rtl`}>
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4 font-arabic">
              السيرة الذاتية غير موجودة
            </h2>
            <p className="mb-6 font-naskh">
              عذراً، السيرة الذاتية التي تبحث عنها غير موجودة
            </p>
            <Link to="/" className="inline-block bg-royal-blue text-white px-6 py-3 rounded-md font-arabic">
              العودة للرئيسية
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col rtl`}>
      <Navbar />
      
      <main className="flex-grow pt-10 md:pt-12">
        <div className="royal-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar with image */}
            <div className="md:col-span-1">
              <div className="royal-border bg-white sticky top-24">
                <div className="aspect-w-3 aspect-h-4 mb-4">
                  <img 
                    src={biography.image} 
                    alt={ biography.name }
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-royal-blue font-arabic">
                    { biography.name}
                  </h2>
                  <p className="text-royal-gold font-medium my-1 font-arabic">
                    {biography.title}
                  </p>
                  <p className="text-sm text-royal-gray mb-3 font-naskh">{biography.years}</p>
                  <p className="text-sm font-naskh">
                    <strong className="font-arabic">وُلِد</strong> 
                    {" "}{ biography.birthplace}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6 font-arabic">
                { biography.name}
              </h1>
              
              <div className="space-y-6">
                {(biography.fullDescription).map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-lg font-naskh">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-royal-blue mb-4 font-arabic">
                  أهم الإنجازات
                </h3>
                <ul className="list-disc pr-6 space-y-2">
                  {(biography.achievements).map((achievement, index) => (
                    <li key={index} className="leading-relaxed font-naskh">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      <Link to="/family" className="mt-8 inline-block bg-royal-blue text-white font-bold py-2 px-6 rounded-md hover:bg-royal-blue/90 transition text-center text-lg font-arabic">
                  <ArrowLeft size={20} className="ml-2 inline" />
                  العودة لشجرة العائلة
      </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Biography;
