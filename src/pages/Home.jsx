import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [imageLoadError, setImageLoadError] = useState({
    headshot: false,
    mohey: false,
    renault: false
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handlePortfolioClick = useCallback((e) => {
    e.preventDefault();
    navigate('/portfolio');
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
      description: "Developing comprehensive brand strategies and communication frameworks"
    },
    {
      title: "Marketing Communications",
      description: "Creating integrated marketing campaigns and PR strategies"
    },
    {
      title: "Content Creation",
      description: "Crafting engaging audio-visual and textual content"
    },
    {
      title: "Research & Analysis",
      description: "Conducting market research and data-driven insights"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/texture.jpg')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center">
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              {/* Left Column - Image and Quick Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    {!imageLoadError.headshot ? (
                      <img
                        src="/Pictures/Headshot524.JPG"
                        alt="Aditi's Portrait"
                        className="w-full rounded-lg shadow-2xl"
                        onError={() => handleImageError('headshot')}
                      />
                    ) : (
                      <div className="w-full aspect-[3/4] rounded-lg shadow-2xl bg-sand flex items-center justify-center">
                        <span className="text-coffee">Image unavailable</span>
                      </div>
                    )}
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-400 rounded-lg z-0"></div>
                </div>
                
                <div className="bg-cream p-8 rounded-lg">
                  <h3 className="font-display text-2xl text-stone mb-4">Qualifications</h3>
                  <ul className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="border-b border-sand last:border-0 pb-4 last:pb-0">
                        <h4 className="font-display text-lg text-stone">{achievement.title}</h4>
                        <p className="text-coffee text-sm">{achievement.subtitle}</p>
                        <p className="text-brand-500 text-xs mt-1">{achievement.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - About Text and Expertise */}
              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-stone mb-8">
                    About Me
                  </h2>
                  <div className="prose prose-lg text-coffee">
                    <p className="mb-6 leading-relaxed">
                      I am a dedicated communications professional with a strong foundation built through both formal education and hands-on experience. Having recently completed a Master's in Brands at Goldsmiths with distinction, I've actively pursued professional growth through HSBC and M&C Saatchi's development programs.
                    </p>
                    <p className="leading-relaxed">
                      My journey in communications has been marked by a commitment to excellence, demonstrated through my participation in the Taylor Bennett Foundation's PR Mentorship Programme and my published work, including my book "Finding Paradise".
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="font-display text-3xl text-stone mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expertise.map((item, index) => (
                      <div
                        key={index}
                        className="bg-cream p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                      >
                        <h4 className="font-display text-xl text-stone mb-3">{item.title}</h4>
                        <p className="text-coffee text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl text-stone mb-6">
                Featured Work
              </h2>
              <p className="text-coffee text-lg max-w-2xl mx-auto">
                A collection of case studies and projects showcasing my expertise in brand development, marketing communications, and strategic planning.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <button onClick={handlePortfolioClick} className="block w-full text-left">
                  <div className="aspect-w-4 aspect-h-3 bg-sand">
                    {!imageLoadError.mohey ? (
                      <img
                        src="/images/mohey.jpg"
                        alt="Mohey Campaign"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError('mohey')}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-sand">
                        <span className="text-coffee">Project image unavailable</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-stone mb-2">Mohey</h3>
                    <p className="text-coffee">Advertising Strategy Campaign</p>
                  </div>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <button onClick={handlePortfolioClick} className="block w-full text-left">
                  <div className="aspect-w-4 aspect-h-3 bg-sand">
                    {!imageLoadError.renault ? (
                      <img
                        src="/images/renault.jpg"
                        alt="Renault India Project"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError('renault')}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-sand">
                        <span className="text-coffee">Project image unavailable</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-stone mb-2">Renault India</h3>
                    <p className="text-coffee">PR Strategy for SUV Launch</p>
                  </div>
                </button>
              </motion.div>
            </div>
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