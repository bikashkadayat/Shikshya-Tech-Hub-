'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { Button } from '@/components/ui/Button';
import { navItems, siteConfig, socialLinks } from '@/data/site';
import { cn } from '@/lib/utils';

/**
 * Slide-in mobile navigation.
 *
 * Accessibility notes:
 *  - rendered as a labelled dialog
 *  - Escape closes it
 *  - focus moves into the panel on open and returns to the trigger on close
 *  - focus is trapped inside the panel while it is open
 *  - background scrolling is locked
 */
export function MobileMenu({
  open,
  onClose,
  isActive,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (item: (typeof navItems)[number]) => boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Move focus in on open, and back to the hamburger on close.
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    // `triggerRef` is a stable ref object.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Escape to close, Tab to cycle within the panel.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn('lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col bg-white shadow-softlg',
          'transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" onClick={onClose} aria-label={`${siteConfig.name} — home`}>
            <Logo height={32} />
          </Link>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-mist2"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors',
                      active ? 'bg-electric/8 text-electric' : 'text-ink hover:bg-mist',
                    )}
                  >
                    {item.label}
                    <ChevronRight
                      className={cn('size-4', active ? 'text-electric' : 'text-muted/60')}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-line px-5 py-5">
          <Button href="/courses" kind="primary" fullWidth withArrow onClick={onClose}>
            Explore Courses
          </Button>
          <Button href="/workshops" kind="accent" fullWidth onClick={onClose}>
            Book a Workshop
          </Button>

          <ul className="mt-2 flex items-center justify-center gap-2.5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full bg-mist text-muted transition-colors hover:bg-electric hover:text-white"
                  >
                    <SocialIcon name={social.icon} className="size-[18px]" />
                  </a>
                ) : (
                  <span
                    aria-label={`${social.label} — link not set yet`}
                    title={`${social.label} — add a link in src/data/site.ts`}
                    className="flex size-10 items-center justify-center rounded-full border border-dashed border-line text-muted/50"
                  >
                    <SocialIcon name={social.icon} className="size-[18px]" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
