import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaScroll, FaFeatherPointed, FaRegPaperPlane } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Animation variants
const containerVariants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
    }
}
};

const itemVariants = {
hidden: { 
    opacity: 0,
    scale: 0.8
},
visible: {
    opacity: 1,
    scale: 1,
    transition: {
        duration: 0.8,
    }
}
};

const titleVariants = {
hidden: { 
    opacity: 0,
    y: -20
},
visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5
    }
}
};

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
};

const moveRight = () => {
    stopAnimation();
    const newPosition = position + 300;
    setPosition(newPosition);
    controls.start({
        x: newPosition,
        transition: { duration: 0.5, ease: "easeOut" }
    });
};

useEffect(() => {
    startAnimation();
}, []);

return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#1D3557]/5 to-transparent relative overflow-hidden">
        {/* Royal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('/src/components/gallery/images/innerBackground.jpg')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto relative">
            {title && (
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-6 font-arabic tracking-wide">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-arabic leading-relaxed">
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}
                
                <div className="relative h-[650px] overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                    <motion.div 
                        className="flex gap-12 px-12"
                        animate={controls}
                        onHoverStart={stopAnimation}
                        onHoverEnd={startAnimation}
                        style={{ x: 0 }}
                    >
                        {[...members, ...members, ...members].map((member, index) => (
                            <motion.div
                                key={index}
                                className="w-[400px]  shrink-0"
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="group bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#1D3557]/10 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(29,53,87,0.2)]">                                    <div className="relative">
                                        <div className="h-[280px] overflow-hidden">
                                            <img
                                                src={member.imageUrl}
                                                alt={`${member.name} - ${member.role}`}
                                                className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 right-0 m-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md">                                            <p className="text-[#1D3557]/80 text-sm font-arabic tracking-wide">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-[#1D3557] mb-4 text-right font-arabic tracking-wider">
                                            {member.name}
                                        </h3>
                                        {member.description && (
                                            <p className="text-gray-600 mb-6 text-right line-clamp-3 group-hover:line-clamp-none transition-all duration-500 font-naskh leading-relaxed tracking-wide">
                                                {member.description}
                                            </p>
                                        )}
                                        {member.links && (
                                            <div className="flex gap-6 justify-end mt-4 pt-4 border-t border-[#1D3557]/10">
                                                {member.links.linkedin && (
                                                    <a
                                                        href={member.links.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#1D3557] hover:text-[#1D3557]/80 transition-colors"
                                                        aria-label={`معرفة المزيد عن ${member.name}`}
                                                    >
                                                        <FaScroll size={24} className="transform hover:scale-110 transition-transform hover:rotate-6" />
                                                    </a>
                                                )}
                                                {member.links.github && (
                                                    <a
                                                        href={member.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#1D3557] hover:text-[#1D3557]/80 transition-colors"
                                                        aria-label={`مستندات ${member.name}`}
                                                    >
                                                        <FaFeatherPointed size={24} className="transform hover:scale-110 transition-transform hover:-rotate-12" />
                                                    </a>
                                                )}
                                                {member.links.email && (
                                                    <a
                                                        href={`mailto:${member.links.email}`}
                                                        className="text-[#1D3557] hover:text-[#1D3557]/80 transition-colors"
                                                        aria-label={`التواصل بخصوص ${member.name}`}
                                                    >
                                                        <FaRegPaperPlane size={22} className="transform hover:scale-110 transition-transform hover:translate-x-1 hover:-translate-y-1" />
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

                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                <button
                    onClick={moveRight}
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#1D3557] hover:bg-[#1D3557]/90 text-white p-5 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20"
                    aria-label="السابق"
                >
                    <IoIosArrowBack size={32} />
                </button>
                <button
                    onClick={moveLeft}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#1D3557] hover:bg-[#1D3557]/90 text-white p-5 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20"
                    aria-label="التالي"
                >
                    <IoIosArrowForward size={32} />
                </button>
            </div>
        </div>
    </section>
);
};

export default TeamMembersShowcase;
