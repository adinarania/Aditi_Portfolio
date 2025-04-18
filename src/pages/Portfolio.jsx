import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PDFViewer from '../components/PDFViewer';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Mohey",
      subtitle: "Advertising Strategy Campaign",
      description: "Developed an effective ad campaign for Mohey, a premium Indian bridal wear brand, based on original market research including interviews and focus group discussions. The campaign 'Khushiyon ke mauke' (Moments of Joy) resonated deeply with the target audience.",
      pdfUrl: "/pdfs/Mohey.pdf",
      pdfTitle: "Mohey - Advertising Strategy Case Study",
      image: "/images/mohey.jpg",
      tags: ["Market Research", "Brand Strategy", "Campaign Development"],
      metrics: [
        { label: "Focus Groups", value: "Multiple" },
        { label: "Research", value: "Original" },
        { label: "Target", value: "Bridal" }
      ]
    },
    {
      id: 2,
      title: "Travelibro",
      subtitle: "Integrated Marketing Communications",
      description: "Developed a comprehensive IMC campaign for Travelibro, focusing on travel and lifestyle. Independently managed budgeting and media planning to create a cohesive strategy aligned with campaign objectives.",
      pdfUrl: "/pdfs/travelibro-campaign.pdf",
      pdfTitle: "Travelibro - IMC Campaign Strategy",
      image: "/images/travelibro.jpg",
      tags: ["IMC", "Media Planning", "Budget Management"],
      metrics: [
        { label: "Strategy", value: "IMC" },
        { label: "Focus", value: "Travel" },
        { label: "Scope", value: "360°" }
      ]
    },
    {
      id: 3,
      title: "Renault India",
      subtitle: "PR Strategy for SUV Launch",
      description: "Crafted a comprehensive PR strategy for Renault India's launch of Tornado, a mid-segment SUV. Developed the PR Launch Plan including market analysis, competitive analysis, target audience profiling, and crisis management protocols.",
      pdfUrl: "/pdfs/renault-pr.pdf",
      pdfTitle: "Renault India - PR Launch Strategy",
      image: "/images/renault.jpg",
      tags: ["PR Strategy", "Launch Planning", "Crisis Management"],
      metrics: [
        { label: "Segment", value: "SUV" },
        { label: "Market", value: "India" },
        { label: "Type", value: "Launch" }
      ]
    },
    {
      id: 4,
      title: "Anti-Smoking Campaign",
      subtitle: "Educational Comic Strip",
      description: "Created an educational comic strip targeting young students about the dangers of cigarette smoking, incorporating psychological concepts and theories to effectively communicate the message.",
      pdfUrl: "/pdfs/smoking-campaign.pdf",
      pdfTitle: "Anti-Smoking Educational Campaign",
      image: "/images/comic.jpg",
      tags: ["Education", "Visual Design", "Psychology"],
      metrics: [
        { label: "Format", value: "Comic" },
        { label: "Audience", value: "Youth" },
        { label: "Focus", value: "Health" }
      ]
    },
    {
      id: 5,
      title: "Spotify Algorithms",
      subtitle: "AI-Driven Personalization Analysis",
      description: "Conducted an in-depth analysis of Spotify's recommendation algorithms and personalization features, examining how AI shapes user experience and engagement. The study explored the balance between algorithmic curation and user discovery.",
      pdfUrl: "/pdfs/spotify-analysis.pdf",
      pdfTitle: "Spotify - AI-Driven Personalization Study",
      image: "/images/spotify.jpg",
      tags: ["AI Analysis", "UX Research", "Digital Strategy"],
      metrics: [
        { label: "Platform", value: "Spotify" },
        { label: "Focus", value: "AI" },
        { label: "Approach", value: "Analysis" }
      ]
    },
    {
      id: 6,
      title: "Sustainable Fashion",
      subtitle: "Brand Storytelling Strategy",
      description: "Developed a comprehensive storytelling strategy for an emerging sustainable fashion brand, focusing on transparent supply chain communication and ethical production narratives that resonate with environmentally conscious consumers.",
      pdfUrl: "/pdfs/sustainable-fashion.pdf",
      pdfTitle: "Sustainable Fashion - Brand Narrative Strategy",
      image: "/images/sustainable.jpg",
      tags: ["Sustainability", "Brand Narrative", "Consumer Engagement"],
      metrics: [
        { label: "Industry", value: "Fashion" },
        { label: "Focus", value: "Ethics" },
        { label: "Approach", value: "Storytelling" }
      ]
    },
    {
      id: 7,
      title: "FinTech Rebrand",
      subtitle: "Digital Banking Experience",
      description: "Led the strategic rebranding initiative for a digital banking platform seeking to appeal to Gen Z and Millennial audiences. Developed positioning, messaging frameworks, and user journey maps to enhance the brand experience across all touchpoints.",
      pdfUrl: "/pdfs/fintech-rebrand.pdf",
      pdfTitle: "FinTech - Digital Banking Rebrand Strategy",
      image: "/images/fintech.jpg",
      tags: ["Rebranding", "Digital Experience", "Financial Services"],
      metrics: [
        { label: "Sector", value: "FinTech" },
        { label: "Audience", value: "Gen Z" },
        { label: "Focus", value: "Experience" }
      ]
    },
    {
      id: 8,
      title: "Virtual Reality Museum",
      subtitle: "Immersive Culture Experience",
      description: "Conceptualized and developed a strategic framework for a virtual reality museum experience, creating accessible cultural engagement for global audiences. The project explored the intersection of technology and cultural preservation.",
      pdfUrl: "/pdfs/vr-museum.pdf",
      pdfTitle: "VR Museum - Immersive Experience Strategy",
      image: "/images/vr-museum.jpg",
      tags: ["Virtual Reality", "Cultural Engagement", "Digital Innovation"],
      metrics: [
        { label: "Technology", value: "VR" },
        { label: "Sector", value: "Culture" },
        { label: "Innovation", value: "High" }
      ]
    }
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[url('/images/texture.jpg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl text-stone mb-6">
              Portfolio
            </h1>
            <p className="text-coffee text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A showcase of creative and analytical work, featuring case studies and content created for various projects and internships. This collection includes both audio-visual and textual content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-32">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <span className="text-brand-500 uppercase tracking-widest text-sm">
                      Case Study {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-4xl text-stone mt-2 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-xl text-coffee font-display">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-coffee leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 bg-white text-coffee text-sm border border-sand rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 bg-white border border-sand">
                        <div className="font-display text-2xl text-brand-500 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-coffee">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`space-y-8 sticky top-24 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-w-4 aspect-h-3 bg-white p-4 shadow-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10"
                  >
                    <PDFViewer
                      url={project.pdfUrl}
                      viewerType="local"
                      title={project.pdfTitle}
                    />
                  </motion.div>
                </div>
              </motion.article>
            ))}
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
              Let's Create Something Impactful Together
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

export default Portfolio; 