import { ProjectCard } from '@/components/cards/project-card';
import { projects } from '@/config/project';
import {
  getAvailableNFTs,
  getCollection,
  getCollectionMetadata,
  getItemMetadata,
  getNextProjectId,
  getProjectDetails
} from '@/lib/queries';
import { getIntegersBetween, shortenAddress } from '@/lib/utils';
import { Project } from '@/types';

export async function Projects() {
  const projectIds = [37, 38, 39, 40, 41, 42, 43, 45];

  // const latestProjectId = await getNextProjectId()
  // getIntegersBetween(37, latestProjectId as number)

  const fetchMetadata = async (projectId: number) => {
    const collectionMetadata = await getCollectionMetadata(projectId);
    const itemMetadata = await getItemMetadata(projectId, 1);
    const availableNFTs = await getAvailableNFTs(projectId);
    const projectDetails = await getProjectDetails(projectId);
    const baseProjectDetails = await getCollection(projectId);

    return {
      collectionMetadata,
      itemMetadata,
      availableNFTs,
      projectDetails,
      baseProjectDetails
    };
  };

  async function getProjects() {
    const results = projectIds.map(async id => {
      try {
        const response: any = await fetchMetadata(id);

        const result = JSON.parse(response.collectionMetadata.data);
        const image = JSON.parse(response.itemMetadata.data);
        const detail = response.projectDetails;
        const numberOfNFTs = response.baseProjectDetails.items;

        const { data } = response.collectionMetadata;

        /*
          data: {projectName: Green Haven Homes,projectDescription:Green Haven Homes focuses on building sustainable, eco-friendly housing in urban areas of Nairobi. Utilizing renewable materials and solar energy, the project aims to provide affordable housing while minimizing environmental impact. Community involvement and local employment opportunities are key components, ensuring long-term sustainability and social empowerment.,projectLocation:Nairobi, Kenya,projectCategory:housing,nftMetadata:[{cid:QmRiXhsfWvWKxJBJTVqVFaUUigP3jqniaWUJD7d9PdNWvm,typeTotalNo:5,typePrice:1000},{cid:QmZyyoQ8ERZudtui2FUBCnaVidKgckcKBfozKU2QQMM2c7,typeTotalNo:5,typePrice:2000},{cid:QmP957tKu3NFGy5Jus7yfe4ZGeD7v9ywEiBBRZ4A9f9ujV,typeTotalNo:2,typePrice:2500}]}
        */

        const out = {
          id: id,
          title: result.projectName,
          category: detail.projectCategory,
          description: result.projectDescription,
          image: `https://crustipfs.mobi/ipfs/${image.cid}`,
          price: detail.projectPrice.replaceAll(',', ''),
          foundationName: shortenAddress(detail.projectOwner),
          noOfNFTs: numberOfNFTs
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
            return <ProjectCard key={project.id} project={project} />;
          }
        })}
    </section>
  );
}
