'use client';

import { Button } from '@/components/ui/button';
import Form, { useZodForm } from '@/components/ui/form';
import Input from '@/components/ui/input';
import SelectInput from '@/components/ui/select';
import Textarea from '@/components/ui/text-area';
import { number, object, string } from 'zod';
import generateImages from '@/lib/image_generation';
import { listProject } from '@/lib/extrinsics';
import { createAuthHeader, uploadAndPinMultiple } from '@/lib/crust';

console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

const createProjectSchema = object({
  name: string().min(5),
  category: string(),
  location: string(),
  description: string().min(20),
  projectLength: string(),
  target: string(),
  nftKeyword: string(),
  nftColour: string(),
  nftDescription: string(),
  nftUnitPrice: string(),
  nftCollectionTotalNumber: string()
});

const categories = [
  {
    name: 'Housing',
    value: 'housing'
  },
  {
    name: 'Environment',
    value: 'environment'
  },
  {
    name: 'Ecology',
    value: 'ecology'
  },
  {
    name: 'Social',
    value: 'social'
  }
];

export function CreateProjectForm() {
  const form = useZodForm({
    schema: createProjectSchema
  });

  // const handleGenerateArtwork = async ({
  //   nftKeyword,
  //   nftColour,
  //   nftDescription
  // }: {
  //   nftKeyword: string;
  //   nftColour: string;
  //   nftDescription: string;
  // }) => {
  // const res = await generateImages({
  //   keyword: nftKeyword,
  //   colour: nftColour,
  //   phrase: nftDescription,
  //   numberOfImages: 1
  // });
  //   console.log(JSON.stringify(res, null, 2));
  // };

  const submitListProject = async (data: any) => {
    const storedAddress = localStorage.getItem('selectedWalletAddress');

    if (!storedAddress) {
      alert('Please connect your wallet to submit the project.');
      return;
    }

    const imagesResult = await generateImages({
      keyword: 'Sun',
      colour: 'Blue',
      phrase: 'Blue sun in outer space, a lush green planet orbits',
      numberOfImages: 2
    });

    if (!imagesResult) {
      return;
    }

    const authHeader = await createAuthHeader(storedAddress);

    // let images = [
    //   {
    //     status: 'fulfilled',
    //     value: {
    //       created: 1703112595,
    //       data: [
    //         {
    //           revised_prompt:
    //             "Visualize an immense, radiating orb of warm yellow sun hanging high in the sky, casting its vivid hues onto the vast expanse of red sand beneath. The sky surrounding the sun is a clear, cerulean blue, providing a striking contrast to the sun's vivid fascinations. The crimson granules of sand ripple with gentle curves, like waves frozen in time. The primary focus should be on the vibrant yellow sun and the element serving as an anchor is the expansive, red-coloured sand underneath.",
    //           url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-bJTg6NaiKWO7yBtdfE68RAL6/user-0hKdBpWUGZzg859SbBGauFcL/img-GpAhB5Z7Wt6k57zJfuYO1XxA.png?st=2023-12-20T21%3A49%3A54Z&se=2023-12-20T23%3A49%3A54Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-20T22%3A49%3A54Z&ske=2023-12-21T22%3A49%3A54Z&sks=b&skv=2021-08-06&sig=jSYk9vJJ5v1nc8C6iPW0rX3QP%2B41sVdp2Q0zeyMGhB0%3D'
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     status: 'fulfilled',
    //     value: {
    //       created: 1703112595,
    //       data: [
    //         {
    //           revised_prompt:
    //             'Imagine a sweeping landscape dominated by a vast expanse of red sand stretching out till the horizon. The scarlet grains, coarse and irregular, contrast vividly with the clean azure atmosphere above. The sky, a canvas of unsullied blue, frames the massive, radiant orb hanging low; a large sun, glorious and resplendent in sharp shades of yellow. The sunlight drips from this celestial body, casting long shadows and bathing the arid landscape in a warm golden hue. This beautiful view highlights the central image of a yellow sun over red sand under a blue sky.',
    //           url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-bJTg6NaiKWO7yBtdfE68RAL6/user-0hKdBpWUGZzg859SbBGauFcL/img-M0Of5XNjoItPhtM5itGdMOOf.png?st=2023-12-20T21%3A49%3A55Z&se=2023-12-20T23%3A49%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-20T22%3A47%3A05Z&ske=2023-12-21T22%3A47%3A05Z&sks=b&skv=2021-08-06&sig=SIwm86br/BoXefW8jkURk1D3V7DF3iZCbJcsZTqIgV4%3D'
    //         }
    //       ]
    //     }
    //   }
    // ];

    const crustIds = await uploadAndPinMultiple(authHeader, imagesResult);

    // const projectData = {
    //   priceAndAmount: [
    //     { price: data.nftUnitPrice, amount: data.nftCollectionTotalNumber } // Each NFT has it's own price and amount to be created
    //   ],
    //   metadata: [], // should be the Crust ID instead of description
    //   duration: data.projectLength,
    //   fundingTarget: data.target,
    //   projectMetadata: '0x' + data.description.toString(16)
    // };

    // console.log(authHeader);
    // await listProject(storedAddress, projectData);
  };

  return (
    <Form form={form} onSubmit={form.handleSubmit(data => submitListProject(data))}>
      <Input
        label="Project name"
        htmlFor="name"
        type="text"
        placeholder="e.g(text)"
        {...form.register('name')}
      />
      <SelectInput
        label="Project category"
        htmlFor="category"
        options={categories}
        {...form.register('category')}
      />
      <Input
        label="Project location"
        htmlFor="name"
        type="text"
        placeholder="London"
        {...form.register('location', { required: true })}
      />
      <Textarea
        label="Project description"
        htmlFor="description"
        placeholder="Text"
        rows={3}
        {...form.register('description')}
      />
      <Input
        label="Project length (In Months)"
        htmlFor="projectLength"
        type="text"
        // placeholder="$0.00"
        {...form.register('projectLength', { required: true })}
      />
      <Input
        label="Funding target"
        htmlFor="target"
        type="text"
        placeholder="$0.00"
        {...form.register('target', { required: true })}
      />

      <Input
        label="NFT Keyword"
        htmlFor="nftKeyword"
        type="text"
        {...form.register('nftKeyword', { required: true })}
      />

      <Input
        label="NFT Colour"
        htmlFor="nftColour"
        type="text"
        {...form.register('nftColour', { required: true })}
      />

      <Input
        label="NFT Description"
        htmlFor="nftDescription"
        type="text"
        {...form.register('nftDescription', { required: true })}
      />

      <Input
        label="Number of NFTs"
        htmlFor="nftCollectionTotalNumber"
        type="text"
        {...form.register('nftCollectionTotalNumber', { required: true })}
      />

      <Input
        label="NFT Unit Price"
        htmlFor="nftUnitPrice"
        type="text"
        placeholder="$0.00"
        {...form.register('nftUnitPrice', { required: true })}
      />

      {/* <Button
        className="my-5 w-full"
        onClick={() => handleGenerateArtwork(form.getValues())}
      >
        Generate Artwork
      </Button> */}

      <Button type="submit" variant={'primary'} className="my-5 w-full">
        Continue
      </Button>
    </Form>
  );
}
