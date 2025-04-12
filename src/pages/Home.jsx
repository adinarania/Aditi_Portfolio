import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [imageLoadError, setImageLoadError] = useState({
    mohey: false,
    renault: false
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handlePortfolioClick = useCallback((e) => {
    e.preventDefault();
    navigate('/portfolio');
    window.scrollTo(0, 0);
  }, [navigate]);

  const handleImageError = useCallback((imageKey) => {
    setImageLoadError(prev => ({
      ...prev,
      [imageKey]: true
    }));
  }, []);

  const achievements = [
    {
      title: "Master's in Brands",
      subtitle: "Goldsmiths",
      description: "Completed with Distinction"
    },
    {
      title: "Gold Award",
      subtitle: "Professional Development",
      description: "Excellence in Communication"
    },
    {
      title: "Published Author",
      subtitle: "Finding Paradise",
      description: "Creative Writing"
    },
    {
      title: "PR Mentorship",
      subtitle: "Taylor Bennett Foundation",
      description: "Industry Recognition"
    }
  ];

  const expertise = [
    {
      title: "Brand Strategy",
      description: "Building dynamic brand positioning and communication ecosystems"
    },
    {
      title: "Personalized Marketing ",
      description: "Leveraging AI and data to craft tailored brand experiences"
    },
    {
      title: "Content, Community & Commerce",
      description: "Driving engagement through storytelling, audience connection, and strategic monetization"
    },
    {
      title: "Data Analytics & AI",
      description: "Using insights and automation to enhance marketing decision-making"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/texture.jpg')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/Pictures/Tree.png" 
              alt="Tree" 
              className="max-h-[300px] mx-auto" 
              onError={() => console.log("Tree image failed to load")}
            />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-stone mb-8">
              Communications Professional
            </h1>
            <p className="text-coffee text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A dedicated communications specialist with a Master's in Brands from Goldsmiths, blending creativity with strategic thinking to create meaningful brand narratives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl text-stone mb-12 text-center">
                About Me
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Qualifications Card */}
                <div className="lg:col-span-1">
                  <div className="bg-cream p-8 rounded-lg shadow-md h-full flex flex-col">
                    <h3 className="font-display text-2xl text-stone mb-8 border-b border-sand pb-3">Qualifications</h3>
                    <ul className="space-y-8 flex-grow">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="border-l-4 border-brand-400 pl-4 py-3 hover:bg-white/30 transition-colors rounded-r">
                          <h4 className="font-display text-lg text-stone">{achievement.title}</h4>
                          <p className="text-coffee text-sm mt-1">{achievement.subtitle}</p>
                          <p className="text-brand-500 text-xs mt-2">{achievement.description}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8 border-t border-sand/50 mt-8">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-coffee italic">Skills & Recognition</p>
                        <div className="flex space-x-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-brand-400"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-sage-400"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-stone"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - About Text */}
                <div className="lg:col-span-2">
                  <div className="bg-white/90 p-8 rounded-lg shadow-md border border-sand">
                    <div className="space-y-6 text-coffee">
                      <p className="leading-relaxed">
                        I am a dedicated communications professional with a strong foundation built through both formal education—having recently completed a Master's in Brands at Goldsmiths with Distinction—and hands-on experience. Blending creativity with a strategic, analytical mindset, I excel in roles that require both creative thinking and data-driven insights.
                      </p>
                      <p className="leading-relaxed">
                        As a published author, I'm naturally drawn to brands and communications because successful ideas aren't just sold—they're told. And I happen to take a keen interest in storytelling. From advertising pitch teams to PR strategy, I've worked on projects across media, marketing, branding, retail, PR and journalism- learning how to position ideas that resonate with different target audiences and stakeholders.
                      </p>
                      
                      <h3 className="font-display text-xl text-stone mt-8 mb-4 border-b border-sand pb-2">My Story</h3>
                      <p className="leading-relaxed">
                        With an enthusiasm for research driven by a curiosity to learn more, I found myself completing an MA in Brands, Communication and Culture at Goldsmiths, University of London immediately following my BBA in Communications Management from FLAME University. Due to this extensive academic interest in media and a natural inclination as an artist, I stand at the intersection of data, strategy, and creativity, excited by the possibilities it offers.
                      </p>
                      
                      <h3 className="font-display text-xl text-stone mt-8 mb-4 border-b border-sand pb-2">Beyond Work</h3>
                      <p className="leading-relaxed mb-4">
                        It isn't hard to believe that I read a lot. Beyond non-fiction, my ever-growing book collection keeps outpacing my shelf space. Moreover, a recent film class led me down a cinematic rabbit hole—now I watch far too many movies, and occasionally pretend Citizen Kane is my favourite.
                      </p>
                      <p className="leading-relaxed">
                        Through my master's degree I've become increasingly interested in how media shapes, and is shaped by culture; with a growing, inevitable presence of promotional media within this space. My interest in media goes beyond storytelling. I've explored virtual and immersive media, as well as AI and machine learning models, to understand how technology is reshaping brand engagement and audience interaction. I'm not just looking to follow industry trends; I want to challenge and redefine them. If you're working on something that challenges the status quo, count me in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Areas of Expertise */}
              <div className="mt-16">
                <h3 className="font-display text-3xl text-stone mb-8 text-center">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-sand/30"
                    >
                      <h4 className="font-display text-xl text-stone mb-3 border-b border-brand-400/30 pb-2">{item.title}</h4>
                      <p className="text-coffee text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-stone text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              Let's Create Something Meaningful Together
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:aditi.narania@gmail.com"
                className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-stone transition-colors duration-300 tracking-widest uppercase text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="Send Email"
              >
                Get in Touch
              </a>
              <a
                href="http://www.linkedin.com/in/narania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-stone hover:bg-transparent hover:text-white border-2 border-white transition-colors duration-300 tracking-widest uppercase text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="Visit LinkedIn Profile"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 