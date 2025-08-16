import HeroSection from '../components/home/HeroSection';
import Introduction from '../components/home/Introduction';
import FamilyTree from '../components/family/FamilyTree';
import Timeline from '../components/timeline/Timeline';
import Gallery from '../components/gallery/Gallery';
import Achievements from '@/components/Achievements/Achievements';
import ContactUs from '../components/home/ContactUs';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-arabic ">
      <main className="flex-grow pt-2 md:pt-5">
        <HeroSection />
        <Introduction />
        <FamilyTree />
        <Timeline />
        <Achievements />
        <Gallery />
        <ContactUs />
      </main>
    </div>
  );
};

export default Index;
