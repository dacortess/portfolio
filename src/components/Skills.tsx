import { Users, Brain, GraduationCap } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';
import { 
  FaPython, FaJava, FaDocker, FaGitAlt, FaReact, FaNodeJs,
  FaAws, FaCss3Alt, FaHtml5
} from 'react-icons/fa';
import { 
  SiTypescript, SiCplusplus, SiMysql, SiApacheairflow,
  SiFlask, SiNumpy, SiPandas, SiTailwindcss
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const Skills = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('skills.features.problemSolving.title'),
      description: t('skills.features.problemSolving.description'),
      icon: Brain,
    },
    {
      title: t('skills.features.teamwork.title'),
      description: t('skills.features.teamwork.description'),
      icon: Users,
    },
    {
      title: t('skills.features.continuousLearning.title'),
      description: t('skills.features.continuousLearning.description'),
      icon: GraduationCap,
    }
  ];

  const skills = [
    // Languages
    { name: 'Python', icon: FaPython, color: '#3776AB', category: t('skills.categories.languages') },
    { name: 'Java', icon: FaJava, color: '#007396', category: t('skills.categories.languages') },
    { name: 'C++', icon: SiCplusplus, color: '#00599C', category: t('skills.categories.languages') },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: t('skills.categories.languages') },
    
    // Frontend
    { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: t('skills.categories.frontend') },
    { name: 'React', icon: FaReact, color: '#61DAFB', category: t('skills.categories.frontend') },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: t('skills.categories.frontend') },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: t('skills.categories.backend') },
    { name: 'Flask', icon: SiFlask, color: '#000000', category: t('skills.categories.backend') },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: t('skills.categories.backend') },
    
    // Data & Cloud
    { name: 'Airflow', icon: SiApacheairflow, color: '#017CEE', category: t('skills.categories.cloud') },
    { name: 'NumPy', icon: SiNumpy, color: '#013243', category: t('skills.categories.data') },
    { name: 'Pandas', icon: SiPandas, color: '#150458', category: t('skills.categories.data') },
    
    // DevOps
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: t('skills.categories.devops') },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', category: t('skills.categories.devops') },
  ];

  return (
    <section id="skills" className="section py-16 sm:py-20">
      <h2 className="section-title text-3xl sm:text-4xl mb-12 sm:mb-16">{t('skills.title')}</h2>
      
      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center p-6 sm:p-8",
                "bg-gray-800/30 rounded-lg backdrop-blur-sm",
                "transform hover:scale-105 transition-all duration-300",
                "animate-fade-in",
                "border border-gray-700/50"
              )}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="hex-icon-wrapper mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl transform rotate-45" />
                  <feature.icon className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300 w-full"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <skill.icon 
                className="w-8 h-8 sm:w-12 sm:h-12 mb-2 transition-all duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;