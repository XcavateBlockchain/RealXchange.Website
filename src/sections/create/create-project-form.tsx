'use client';

import { Button } from '@/components/ui/button';
import Form, { useZodForm } from '@/components/ui/form';
import Input from '@/components/ui/input';
import SelectInput from '@/components/ui/select';
import Textarea from '@/components/ui/text-area';
import { number, object, string } from 'zod';
import generateImages from '@/lib/image_generation';
import { listProject } from '@/lib/extrinsics';

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
  //   const res = await generateImages({
  //     keyword: nftKeyword,
  //     colour: nftColour,
  //     phrase: nftDescription,
  //     numberOfImages: 1
  //   });
  //   console.log(JSON.stringify(res, null, 2));
  // };

  const submitListProject = async (data: any) => {
    const projectData = {
      priceAndAmount: [
        { price: data.nftUnitPrice, amount: data.nftCollectionTotalNumber } // Each NFT has it's own price and amount to be created
      ],
      metadata: [data.nftDescription], // should be the Crust ID instead of description
      duration: data.projectLength,
      fundingTarget: data.target,
      projectMetadata: '0x' + data.description.toString(16)
    };
    await listProject('5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw', projectData); // The address here should come from whatever address they select to use when they click connect wallet
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
