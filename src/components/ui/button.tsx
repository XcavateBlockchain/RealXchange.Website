import { cva, type VariantProps } from 'class-variance-authority';
import { BaseButton, BaseButtonProps } from './base-button';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center gap-5 rounded-3xl', {
  variants: {
    variant: {
      default: 'bg-foreground text-primary-light hover:bg-foreground/90 font-medium'
    },
    size: {
      default: 'py-4 px-5 text-[0.875rem]/[1.25rem] w-[225px]'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export interface ButtonProps
  extends BaseButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ variant, size, fullWidth, className, ...props }: ButtonProps) => {
  return (
    <BaseButton className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants, BaseButton };
