'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { title } from 'process';

export default function PageActivty({
  params: { projectId }
}: {
  params: { projectId: string };
}) {
  const router = useRouter();
  return (
    <section className="container flex w-full flex-col items-start gap-10 px-[100px] py-10">
      <Button href={`/project/${projectId}`} variant="plain" size="text">
        <Icons.back className="h-6 w-6" /> Back
      </Button>

      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-[1.5rem]/[1.5rem] font-bold">Project activity</h1>

        <div className="flex w-full flex-col items-start gap-4">
          <ActivityDescriptionItem title="Project name:" value="Green canopy Initiatve" />
          <ActivityDescriptionItem
            title="Project goal:"
            value="Plant one million trees to combat deforestation and promote environmental sustainability."
          />
          <ActivityDescriptionItem
            title="Project completion target:"
            value="1,000,000 trees"
          />
          <ActivityDescriptionItem title="Total trees planted:" value="5,000" />
        </div>
      </div>

      <div className="grid w-full grid-cols-5 gap-[21px]">
        <ActivityOverviewItem label="Raised" value="$225,000" />
        <ActivityOverviewItem label="Milestones" value="9" />
        <ActivityOverviewItem label="Remaining" value="9" />
        <ActivityOverviewItem label="Amount paid" value="$0.00" />
        <ActivityOverviewItem label="Amount locked" value="$0.00" />
      </div>
    </section>
  );
}

const ActivityDescriptionItem = ({ title, value }: { title: string; value: string }) => (
  <dl className="flex items-start gap-2 text-[1rem]/[1.5rem]">
    <dt>{title}</dt>
    <dd className="font-light">{value}</dd>
  </dl>
);

const ActivityOverviewItem = ({ label, value }: { label: string; value: string }) => (
  <div className="shadow-activity inline-flex h-[174px] w-[229px] flex-col items-center gap-6 rounded-lg border-foreground/[0.42] py-[51px] text-[1rem]/[1.5rem] font-normal">
    <dt>{label}</dt>
    <dd>{value}</dd>
  </div>
);
