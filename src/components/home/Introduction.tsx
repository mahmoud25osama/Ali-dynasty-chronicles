import img01 from "@/assets/images/منتزه.jpg";
const Introduction = () => {
  return (
    <section className="py-12 md:py-24 bg-royal-cream/30">
      <div className="royal-container">
        <h2 className="section-title font-arabic text-4xl md:text-5xl">الأسرة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-8 leading-relaxed font-naskh">
              حكمت أسرة محمد علي، المعروفة أيضًا باسم الأسرة العلوية، مصر والسودان من عام 1805 حتى الثورة المصرية عام 1952، 
              عندما أُجبر الملك فاروق على التنازل عن العرش لصالح ابنه الرضيع أحمد فؤاد، الذي تم خلعه في العام التالي عندما 
              أعلنت مصر جمهورية.
            </p>
            <p className="text-xl mb-8 leading-relaxed font-naskh">
              أسس الأسرة محمد علي باشا، وهو قائد ألباني في الجيش العثماني تم تعيينه واليًا على مصر في عام 1805. 
              نفذ إصلاحات شاملة أدت إلى تحديث الجيش المصري والاقتصاد ونظام التعليم.
            </p>
            <p className="text-xl leading-relaxed font-naskh">
              تحت حكم محمد علي، أصبحت مصر مركزًا ثقافيًا وتجاريًا في المنطقة. أسس العديد من المؤسسات التعليمية.
              تحت حكم الأسرة، تحولت مصر من أراضٍ عثمانية إلى دولة شبه مستقلة أصبحت لاحقًا محمية بريطانية قبل أن تنال 
              استقلالها الكامل. لا يزال إرث محمد علي وذريته يؤثر على مصر الحديثة والشرق الأوسط الأوسع.
            </p>
          </div>
          
          <div className="royal-border bg-white">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded">
              <img 
                src={img01} 
                alt="قصر تاريخي في مصر" 
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-base text-royal-gray mt-3 text-center font-naskh">
              قصر المنتزه، بُني خلال حكم الأسرة
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-royal-blue mb-8 font-arabic">
            إرث التحديث
          </h3>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed font-naskh">
            يُعتبر محمد علي باشا مؤسس مصر الحديثة على نطاق واسع. حولت إصلاحاته الطموحة ورؤيته مصر من ولاية عثمانية 
            مهملة إلى قوة إقليمية مهمة ذات جيش وبيروقراطية مستوحاة من أوروبا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
