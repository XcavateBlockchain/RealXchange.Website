import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const shellVariants = cva('grid items-center gap-8', {
  variants: {
    variant: {
      default: 'container pb-8 pt-6 md:px-[100px] md:py-[46px]',
      centered: 'container flex h-[100dvh] max-w-2xl flex-col justify-center'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({ className, as: Comp = 'main', variant, ...props }: ShellProps) {
  return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
