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
    <ul className="grid grid-cols-3 items-start gap-[17px]">
      {featuredProjects.map(project => (
        <li
          key={project.title}
          className="relative flex h-full w-full  flex-col items-start gap-[14px] rounded-[7px] bg-background px-2 pb-[14px] pt-2 shadow-feature-card"
        >
          <Link href={'/'}>
            <Image
              src={project.image}
              alt={project.title}
              width={236}
              height={178}
              priority
            />
          </Link>

          <div className="flex space-x-[11px]">
            <div className="w-full space-y-[6.77px]">
              <h4 className="text-[0.75rem] font-medium">{project.title}</h4>
              <Link href={''} className="text-[0.625rem] font-light">
                {project.foundationName}
              </Link>
            </div>
            {category[project.category].icon}
          </div>
        </li>
      ))}
    </ul>
  );
}
