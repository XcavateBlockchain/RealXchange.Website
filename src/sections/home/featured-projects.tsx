import { Icons } from '@/components/icons';
import { featuredProjects } from '@/config/project';
import { ProjectCategory } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const category: ProjectCategory = {
  ['ecology']: {
    title: 'ecology',
    icon: <Icons.ecology className=" h-3.5 w-3.5" />
  },
  ['environment']: {
    title: 'environment',
    icon: <Icons.environment className=" h-3.5 w-3.5" />
  },
  ['social']: {
    title: 'social',
    icon: <Icons.social className=" h-3.5 w-3.5" />
  },
  ['housing']: {
    title: 'housing',
    icon: <Icons.housing className=" h-3.5 w-3.5" />
  }
};

export default function FeaturedProjects() {
  return (
    <div className="grid w-full grid-cols-3 gap-x-4">
      {featuredProjects.map(project => (
        <Link
          href={project.category}
          key={project.image}
          className="flex h-[234px] w-[250px] flex-col items-start gap-4 rounded-lg bg-primary-light px-2 pb-6 pt-2 shadow-feature-card"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={236}
            height={178}
            priority
          />

          <div className="flex w-full items-center justify-between">
            <h4 className="text-[ 0.75rem;] font-unbounded">
              {category[project.category].title}
            </h4>
            {category[project.category].icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
