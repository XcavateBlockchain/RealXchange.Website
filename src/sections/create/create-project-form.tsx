'use client';

import { Button } from '@/components/ui/button';
import Form, { useZodForm } from '@/components/ui/form';
import Input from '@/components/ui/input';
import SelectInput from '@/components/ui/select';
import Textarea from '@/components/ui/text-area';
import { number, object, string } from 'zod';
import generateImages from '@/lib/image_generation';

console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

const createProjectSchema = object({
  name: string().min(5),
  category: string(),
  location: string(),
  description: string().min(20),
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

  const handleGenerateArtwork = async ({
    nftKeyword,
    nftColour,
    nftDescription
  }: {
    nftKeyword: string;
    nftColour: string;
    nftDescription: string;
  }) => {
    const res = await generateImages({
      keyword: nftKeyword,
      colour: nftColour,
      phrase: nftDescription,
      numberOfImages: 1
    });
    console.log(JSON.stringify(res, null, 2));
  };

  return (
    <Form form={form} onSubmit={form.handleSubmit(data => console.log(data))}>
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
        label="Funding target"
        htmlFor="name"
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

      <Button
        className="my-5 w-full"
        onClick={() => handleGenerateArtwork(form.getValues())}
      >
        Generate Artwork
      </Button>

      {/* <Button type="submit" variant={'primary'} className="my-5 w-full">
        Continue
      </Button> */}
    </Form>
  );
}
