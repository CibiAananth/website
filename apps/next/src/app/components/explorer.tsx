/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React from 'react';
import Image from 'next/image';

import { Icons } from '@/ui/icons';
import { IconFolderFilled } from '@tabler/icons-react';
import {
  Accordion,
  AccordionContent,
  ExplorerItem,
  ExplorerTrigger,
} from 'neon';

export const Explorer = (): React.ReactNode => (
  <div className="relative h-full w-[280px] bg-background/95">
    <div className="absolute bottom-0 flex w-full justify-center">
      <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
    </div>
    <div className="h-full rounded-md border px-3 py-2">
      <Icons.nextLight className="mt-2 h-auto w-4/12 text-foreground" />
      <h4 className="text-md ml-1 mt-5 text-gray-600">Explorer</h4>
      <div className="mt-3">
        <Accordion collapsible>
          <ExplorerItem value="website">
            <ExplorerTrigger className="gap-1 text-slate-300">
              <div className="flex items-end gap-2.5">
                {/* @ts-ignore */}
                <IconFolderFilled name="folder-simple" className="h-5 w-5" />
                website
              </div>
            </ExplorerTrigger>
            <AccordionContent>
              <Accordion collapsible className="ml-6 py-1">
                <ExplorerItem value="app">
                  <ExplorerTrigger className="gap-1 text-slate-300">
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
                    <div>
                      <Accordion collapsible className="ml-6 py-1">
                        <ExplorerItem value="projects">
                          <ExplorerTrigger className="gap-1 text-slate-300">
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
                      </Accordion>
                      <Accordion collapsible className="ml-6 py-1">
                        <ExplorerItem value="blogs">
                          <ExplorerTrigger className="gap-1 text-slate-300">
                            <div className="flex items-end gap-2.5">
                              {/* @ts-ignore */}
                              <IconFolderFilled
                                name="folder-simple"
                                className="h-5 w-5"
                              />
                              blogs
                            </div>
                          </ExplorerTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </ExplorerItem>
                      </Accordion>
                      <div className="ml-11 flex gap-2.5 py-2 text-slate-300 hover:underline">
                        <Image
                          alt="Next.js"
                          src={'/assets/svg/react.svg'}
                          width={20}
                          height={20}
                        />
                        layout.tsx
                      </div>
                      <div className="ml-11 flex gap-2.5 py-2 text-slate-300 hover:underline">
                        <Image
                          alt="Next.js"
                          src={'/assets/svg/react.svg'}
                          width={20}
                          height={20}
                        />
                        page.tsx
                      </div>
                    </div>
                  </AccordionContent>
                </ExplorerItem>
              </Accordion>
            </AccordionContent>
          </ExplorerItem>
        </Accordion>
      </div>
    </div>
  </div>
);
