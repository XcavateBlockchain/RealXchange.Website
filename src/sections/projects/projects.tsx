import { ProjectCard } from '@/components/cards/project-card';
import { projects } from '@/config/project';

export function Projects() {
  return (
    <section className="grid grid-cols-4 gap-5">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
