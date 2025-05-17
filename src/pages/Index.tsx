import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import Introduction from '../components/home/Introduction';
import FamilyTree from '../components/family/FamilyTree';
import Timeline from '../components/timeline/Timeline';
import Gallery from '../components/gallery/Gallery';
import Achievements from '@/components/Achievements/Achievements';
import ContactUs from '../components/home/ContactUs';
import TeamMembersShowcase from '../components/team/TeamMembersShowcase';
import { teamMembers } from '../data/teamMembers';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-arabic ">
      <Navbar />
      
      <main className="flex-grow pt-2 md:pt-5">
        <HeroSection />
        <Introduction />
        <FamilyTree />
        <Timeline />
        <Achievements />
        <Gallery />
        <TeamMembersShowcase 
          members={teamMembers}
          title="فريق العمل"
          description="تعرف على أعضاء فريقنا المتميزين الذين يعملون بجد لتقديم أفضل تجربة ممكنة."
        />
        <ContactUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
