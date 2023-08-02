'use client';

import * as React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { TriangleRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { AccordionItem, AccordionTrigger } from './accordion';

const ExplorerItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionItem
    ref={ref}
    className={cn('border-none', className)}
    {...props}
  />
));

ExplorerItem.displayName = 'ExplorerItem';

const ExplorerTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionTrigger
    ref={ref}
    className={cn(
      'flex items-center justify-start gap-1 py-1 text-sm font-normal transition-all hover:underline [&[data-state=open]>.triangle]:rotate-90 [&[data-state=open]>svg]:rotate-0',
      className,
    )}
    iconPosition="left"
    Icon={
      <TriangleRightIcon className="triangle h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    }
    {...props}
  >
    {children}
  </AccordionTrigger>
));

ExplorerTrigger.displayName = 'ExplorerTrigger';

export { ExplorerItem, ExplorerTrigger };
