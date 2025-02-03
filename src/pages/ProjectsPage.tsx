import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Projects, type Project } from "@/components/ui/projects";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: 'Crypto Analyzer',
      description: t('projects.projects.cryptoAnalyzer'),
      tech: ['Python', 'Flask', 'Typescript', 'Vite', 'TailwindCSS'],
      image: '/images/crypto-analyzer.jpg',
      demo: 'https://playful-flan-1c5e1c.netlify.app/',
      github: 'https://github.com/dacortess/Intro-Crypto-Project?tab=readme-ov-file',
    },
    {
      title: 'Space Destroyer',
      description: t('projects.projects.spaceDestroyer'),
      tech: ['Python', 'Pygame', 'Sockets'],
      image: '/images/space-destroyer.jpg',
      demo: '#',
      github: 'https://github.com/dacortess/Space-Destroyer',
    },
    {
      title: 'Maze Solver',
      description: t('projects.projects.mazeSolver'),
      tech: ['Python', 'Pygame', 'Tkinter', 'C++'],
      image: '/images/maze-solver.jpg',
      demo: 'https://www.youtube.com/watch?v=5vNwhw3XhFg',
      github: 'https://github.com/dacortess/maze_solver_iia?tab=readme-ov-file',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('navigation.back')}
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-8">{t('projects.title')}</h1>
        <Projects projects={projects} />
      </Card>
    </div>
  );
};

export default ProjectsPage;