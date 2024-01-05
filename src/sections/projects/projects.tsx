import { ProjectCard } from '@/components/cards/project-card';
import { projects } from '@/config/project';
import {
  getAvailableNFTs,
  getCollectionMetadata,
  getItemMetadata,
  getProjectDetails
} from '@/lib/queries';
import { shortenAddress } from '@/lib/utils';
import { Project } from '@/types';

const projectIds = [26, 27, 28, 29, 30, 31];

export async function Projects() {
  const fetchMetadata = async (projectId: number) => {
    const collectionMetadata = await getCollectionMetadata(projectId);
    const itemMetadata = await getItemMetadata(projectId, 1);
    const availableNFTs = await getAvailableNFTs(projectId);
    const projectDetails = await getProjectDetails(projectId);

    return { collectionMetadata, itemMetadata, availableNFTs, projectDetails };
  };

  async function getProjects() {
    const results = projectIds.map(async id => {
      try {
        const response: any = await fetchMetadata(id);

        const result = await JSON.parse(response.collectionMetadata.data);
        const image = await JSON.parse(response.itemMetadata.data);
        const detail = response.projectDetails;

        const { data } = response.collectionMetadata;

        const out = {
          id: id,
          title: result.projectName,
          category: 'environment',
          description: result.description,
          image: `https://crustipfs.mobi/ipfs/${image.cid}`,
          price: detail.projectPrice,
          foundationName: shortenAddress(detail.projectOwner),
          noOfNFTs: detail.nftTypes
        } as Project;
        return out;
      } catch (error) {
        console.log(error);
      }
    });

    return results;
  }

  const projects = await Promise.all(await getProjects());

  return (
    <section className="grid grid-cols-4 gap-5">
      {projects &&
        projects.map(project => {
          if (project) {
            return <ProjectCard project={project} />;
          }
        })}
    </section>
  );
}
