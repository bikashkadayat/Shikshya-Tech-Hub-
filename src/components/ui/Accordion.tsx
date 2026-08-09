'use client';

import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AccordionItem = {
  question: string;
  answer: string;
};

/**
 * FAQ accordion. The first item is open by default, matching the reference.
 * Built on real buttons with aria-expanded / aria-controls so it is fully
 * keyboard operable and announced correctly by screen readers.
 */
export function Accordion({
  items,
  tone = 'light',
  defaultOpen = 0,
  className,
}: {
  items: AccordionItem[];
  tone?: 'light' | 'dark';
  /** Index to open initially, or `null` for all closed. */
  defaultOpen?: number | null;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              'overflow-hidden rounded-card border transition-colors',
              tone === 'dark'
                ? 'border-white/10 bg-white/4'
                : 'border-line bg-white',
              isOpen && (tone === 'dark' ? 'border-white/20' : 'border-electric/30 shadow-softsm'),
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5',
                  'cursor-pointer transition-colors',
                  tone === 'dark' ? 'hover:bg-white/4' : 'hover:bg-mist',
                )}
              >
                <span
                  className={cn(
                    'font-display text-[16px] font-bold sm:text-[17px]',
                    tone === 'dark' ? 'text-white' : 'text-ink',
                  )}
                >
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
                    isOpen
                      ? 'g-blue text-white'
                      : tone === 'dark'
                        ? 'bg-white/10 text-ondark'
                        : 'bg-mist2 text-electric',
                  )}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                'px-5 pb-5 sm:px-6 sm:pb-6',
                tone === 'dark' ? 'text-onmute' : 'text-muted',
              )}
            >
              <p
                className={cn(
                  't-body max-w-3xl border-t pt-4',
                  tone === 'dark' ? 'border-white/10' : 'border-line',
                )}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
