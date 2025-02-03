import { useTranslation } from 'react-i18next';
import { Projects as ProjectsUI, type Project } from '@/components/ui/projects';
import { Link } from 'react-router-dom';
import cryptoanalyzerimg from '/assets/images/crypto-analyzer.jpg';
import spacedestroyerimg from '/assets/images/space-destroyer.jpg';
import mazesolverimg from '/assets/images/maze-solver.jpg';

const Projects = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: 'Crypto Analyzer',
      description: t('projects.projects.cryptoAnalyzer'),
      tech: ['Python', 'Flask', 'Typescript', 'Vite', 'TailwindCSS'],
      image: cryptoanalyzerimg,
      demo: 'https://playful-flan-1c5e1c.netlify.app/',
      github: 'https://github.com/dacortess/Intro-Crypto-Project?tab=readme-ov-file',
    },
    {
      title: 'Space Destroyer',
      description: t('projects.projects.spaceDestroyer'),
      tech: ['Python', 'Pygame', 'Sockets'],
      image: spacedestroyerimg,
      demo: '#',
      github: 'https://github.com/dacortess/Space-Destroyer',
    },
    {
      title: 'Maze Solver',
      description: t('projects.projects.mazeSolver'),
      tech: ['Python', 'Pygame', 'Tkinter', 'C++'],
      image: mazesolverimg,
      demo: 'https://www.youtube.com/watch?v=5vNwhw3XhFg',
      github: 'https://github.com/dacortess/maze_solver_iia?tab=readme-ov-file',
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="max-w-7xl mx-auto">
        <ProjectsUI projects={projects} />
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            {t('projects.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;