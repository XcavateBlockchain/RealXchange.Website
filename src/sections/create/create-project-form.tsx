'use client';

import { Button } from '@/components/ui/button';
import Form, { useZodForm } from '@/components/ui/form';
import Input from '@/components/ui/input';
import SelectInput from '@/components/ui/select';
import Textarea from '@/components/ui/text-area';
import { object, string } from 'zod';

const createProjectSchema = object({
  name: string().min(5),
  category: string(),
  location: string(),
  description: string().min(20),
  target: string()
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

      <Button type="submit" variant={'primary'} className="my-5 w-full">
        Continue
      </Button>
    </Form>
  );
}
