import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaScroll, FaFeatherPointed, FaRegPaperPlane } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Animation variants
// Removed animation variants for better performance

interface SocialLinks {
linkedin?: string;
github?: string;
email?: string;
[key: string]: string | undefined;
}

interface TeamMember {
name: string;
role: string;
imageUrl: string;
description?: string;
links?: SocialLinks;
department?: string; // Added for future filtering
}

interface TeamMembersShowcaseProps {
members: TeamMember[];
title?: string;
description?: string;
}

const TeamMembersShowcase: React.FC<TeamMembersShowcaseProps> = ({ 
members,
title = "Our Team",
description
}) => {
const controls = useAnimation();
const [position, setPosition] = useState(0);
const [isAnimating, setIsAnimating] = useState(true);
const [currentPage, setCurrentPage] = useState(0);

const startAnimation = async () => {
    setIsAnimating(true);
    await controls.start({
        x: [0, -2000],
        transition: {
            duration: 40,
            repeat: Infinity,
            ease: "linear"
        }
    });
};

const stopAnimation = () => {
    setIsAnimating(false);
    controls.stop();
};
const moveLeft = () => {
    stopAnimation();
    const newPosition = position - 300;
    setPosition(newPosition);
    controls.start({
        x: newPosition,
        transition: { duration: 0.5, ease: "easeOut" }
    });
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(members.length / (window.innerWidth < 768 ? 1 : 3)) - 1));
};

const moveRight = () => {
    stopAnimation();
    const newPosition = position + 300;
    setPosition(newPosition);
    controls.start({
        x: newPosition,
        transition: { duration: 0.5, ease: "easeOut" }
    });
    setCurrentPage((prev) => Math.max(prev - 1, 0));
};

const goToPage = (page: number) => {
    stopAnimation();
    setCurrentPage(page);
    const offset = -page * 300 * (window.innerWidth < 768 ? 1 : 3);
    setPosition(offset);
    controls.start({
        x: offset,
        transition: { duration: 0.5, ease: "easeOut" }
    });
}

useEffect(() => {
    startAnimation();
}, []);

return (
    <section className="py-4 md:py-8 px-1 md:px-2 bg-gradient-to-b from-[#1D3557]/5 to-transparent relative overflow-hidden">
        {/* Royal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('/src/components/gallery/images/innerBackground.jpg')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto relative">
            {title && (
                <div className="text-center mb-4 md:mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-2 md:mb-4 font-arabic tracking-wide">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg font-arabic leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            )}
                
            <div className="relative h-[600px] md:h-[650px] overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                    <motion.div 
                        className="flex gap-2 md:gap-4 px-2 md:px-4"
                        animate={controls}
                        onHoverStart={stopAnimation}
                        onHoverEnd={startAnimation}
                        style={{ x: 0 }}
                    >
                        {[...members, ...members, ...members].map((member, index) => (
                            <motion.div
                                key={index}
                                className="w-[260px] md:w-[380px] shrink-0"
                            >
                                <div className="group bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl overflow-hidden border border-[#1D3557]/10">
                                    <div className="relative">
                                        <div className="h-[180px] md:h-[280px] overflow-hidden">
                                            <img
                                                src={member.imageUrl}
                                                alt={`${member.name} - ${member.role}`}
                                                className="w-full aspect-square object-cover object-center hidden md:block md:transition-transform md:duration-500 md:group-hover:scale-110"
                                            />
                                            <img
                                                src={member.imageUrl}
                                                alt={`${member.name} - ${member.role}`}
                                                className="w-full aspect-square object-cover object-center md:hidden"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/80 via-transparent to-transparent opacity-0 hidden md:block md:group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 right-0 m-2 md:m-4 bg-white/90 backdrop-blur px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                            <p className="text-[#1D3557]/80 text-xs md:text-sm font-arabic tracking-wide">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-3 md:p-8">
                                        <h3 className="text-lg md:text-2xl font-bold text-[#1D3557] mb-1 md:mb-2">
                                            {member.name}
                                        </h3>
                                        {member.description && (
                                            <p className="text-gray-600 mb-4 md:mb-6 text-right text-xs md:text-base line-clamp-3 font-naskh leading-relaxed tracking-wide">
                                                {member.description}
                                            </p>
                                        )}
                                        {member.links && (
                                            <div className="flex gap-3 md:gap-6 justify-end mt-2 md:mt-4 pt-2 md:pt-4 border-t border-[#1D3557]/10">
                                                {member.links.linkedin && (
                                                    <a
                                                        href={member.links.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#1D3557]"
                                                        aria-label={`معرفة المزيد عن ${member.name}`}
                                                    >
                                                        <FaScroll size={20} className="hidden md:inline md:transform md:hover:scale-110 md:transition-transform md:hover:rotate-6" />
                                                        <FaScroll size={20} className="md:hidden" />
                                                    </a>
                                                )}
                                                {member.links.github && (
                                                    <a
                                                        href={member.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#1D3557]"
                                                        aria-label={`مستندات ${member.name}`}
                                                    >
                                                        <FaFeatherPointed size={20} className="hidden md:inline md:transform md:hover:scale-110 md:transition-transform md:hover:-rotate-12" />
                                                        <FaFeatherPointed size={20} className="md:hidden" />
                                                    </a>
                                                )}
                                                {member.links.email && (
                                                    <a
                                                        href={`mailto:${member.links.email}`}
                                                        className="text-[#1D3557]"
                                                        aria-label={`التواصل بخصوص ${member.name}`}
                                                    >
                                                        <FaRegPaperPlane size={18} className="hidden md:inline md:transform md:hover:scale-110 md:transition-transform md:hover:translate-x-1 md:hover:-translate-y-1" />
                                                        <FaRegPaperPlane size={18} className="md:hidden" />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                <button
                    onClick={moveRight}
                    className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-[#1D3557] text-white flex items-center justify-center p-2 md:p-3 rounded-full shadow-none opacity-70 transition-colors md:hover:bg-[#1D3557]/90 md:hover:opacity-100 md:transition-all md:duration-300 md:transform md:hover:scale-110 z-20"
                    aria-label="السابق"
                >
                    <IoIosArrowBack className="m-0" size={window.innerWidth < 768 ? 20 : 32} />
                </button>
                <button
                    onClick={moveLeft}
                    className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-[#1D3557] text-white flex items-center justify-center p-2 md:p-3 rounded-full shadow-none opacity-70 transition-colors md:hover:bg-[#1D3557]/90 md:hover:opacity-100 md:transition-all md:duration-300 md:transform md:hover:scale-110 z-20"
                    aria-label="التالي"
                >
                    <IoIosArrowForward className="m-0" size={window.innerWidth < 768 ? 20 : 32} />
                </button>
            </div>
        </div>
    </section>
);
};

export default TeamMembersShowcase;
