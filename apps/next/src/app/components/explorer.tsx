/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React from 'react';
import Image from 'next/image';

import { IconFolderFilled } from '@tabler/icons-react';
import {
  Accordion,
  AccordionContent,
  ExplorerItem,
  ExplorerTrigger,
} from 'neon';

import { Icons } from '@/components/icons';

export const Explorer = (): React.ReactNode => (
  <div className="h-full w-3/12 border-r bg-background/95">
    <Icons.nextLight className="mt-2 h-auto w-4/12 text-foreground" />
    <h4 className="text-md ml-1 mt-5 text-gray-600">Explorer</h4>
    <div className="mt-3">
      <Accordion collapsible>
        <ExplorerItem value="website">
          <ExplorerTrigger className="gap-1 text-slate-200">
            <div className="flex items-end gap-2.5">
              {/* @ts-ignore */}
              <IconFolderFilled name="folder-simple" className="h-5 w-5" />
              website
            </div>
          </ExplorerTrigger>
          <AccordionContent>
            <Accordion collapsible className="ml-6 py-1">
              <ExplorerItem value="app">
                <ExplorerTrigger className="gap-1 text-slate-200">
                  <div className="flex items-end gap-2.5">
                    {/* @ts-ignore */}
                    <IconFolderFilled
                      name="folder-simple"
                      className="h-5 w-5"
                    />
                    app
                  </div>
                </ExplorerTrigger>
                <AccordionContent>
                  <Accordion collapsible className="ml-6 py-1">
                    <ExplorerItem value="projects">
                      <ExplorerTrigger className="gap-1 text-slate-200">
                        <div className="flex items-end gap-2.5">
                          {/* @ts-ignore */}
                          <IconFolderFilled
                            name="folder-simple"
                            className="h-5 w-5"
                          />
                          projects
                        </div>
                      </ExplorerTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </ExplorerItem>
                    <div className="ml-8 flex gap-2.5 py-2 hover:underline">
                      <Image
                        alt="Next.js"
                        src={'/assets/svg/react.svg'}
                        width={20}
                        height={20}
                      />
                      layout.tsx
                    </div>
                    <div className="ml-8 flex gap-2.5 py-2 hover:underline">
                      <Image
                        alt="Next.js"
                        src={'/assets/svg/react.svg'}
                        width={20}
                        height={20}
                      />
                      page.tsx
                    </div>
                  </Accordion>
                </AccordionContent>
              </ExplorerItem>
            </Accordion>
          </AccordionContent>
        </ExplorerItem>
      </Accordion>
    </div>
  </div>
);
