import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      period: '05/2022 - 10/2022',
      title: t('experience.talentpitch.role'),
      company: 'Talentpitch',
      description: t('experience.talentpitch.description'),
      technologies: ['Python', 'React', 'SQL']
    },
  ];

  return (
    <section id="experience" className="w-full min-h-screen bg-dark-900 flex flex-col justify-center items-center py-16 sm:py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16 text-center"
      >
        {t('experience.title')}
      </motion.h2>
      
      <div className="w-full max-w-4xl space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:w-1/4 text-center md:text-left"
            >
              <span className="text-gray-400 font-mono text-sm sm:text-base">{exp.period}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:w-3/4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center md:text-left">
                {exp.title} · <span className="text-primary">{exp.company}</span>
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base text-center md:text-left">{exp.description}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-dark-800 text-primary rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
