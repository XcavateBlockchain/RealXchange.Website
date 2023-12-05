import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

function PageHeader({
  className,
  children,
  as: Comp = 'section',
  ...props
}: PageHeaderProps) {
  return (
    <Comp className={cn('grid gap-1', className)} {...props}>
      {children}
    </Comp>
  );
}

const headingVariants = cva('font-bold', {
  variants: {
    size: {
      default: 'text-[1.5rem]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface PageHeaderHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function PageHeaderHeading({
  className,
  size,
  as: Comp = 'h1',
  ...props
}: PageHeaderHeadingProps) {
  return <Comp className={cn(headingVariants({ size, className }))} {...props} />;
}

export { PageHeader, PageHeaderHeading };
