'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MobileMenu } from './MobileMenu';
import { navItems, type NavItem } from '@/data/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Add a hairline + stronger blur once the page is scrolled.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Anchor items ("/#about") are only ever active on the home page, and the
   * home item itself must not stay active on nested routes.
   */
  function isActive(item: NavItem) {
    if (!item.match) return false;
    if (item.match === '/') return pathname === '/';
    return pathname === item.match || pathname.startsWith(`${item.match}/`);
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-line bg-white/90 shadow-softsm backdrop-blur-md'
            : 'border-b border-transparent bg-white/70 backdrop-blur-sm',
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-4 lg:h-[78px]">
          <Link href="/" aria-label="Shikshya Tech Hub — home" className="shrink-0">
            <Logo height={34} />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item);

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors',
                        active ? 'text-electric' : 'text-ink/80 hover:text-electric',
                      )}
                    >
                      {item.label}
                      {/* Active indicator — the circuit rule, scaled down. */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-electric transition-transform duration-200',
                          active ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* `max-sm:hidden` rather than `hidden sm:inline-flex`: Button's own
                base class sets `inline-flex`, and an unprefixed `hidden` in the
                same layer does not reliably win against it. */}
            <Button href="/courses" kind="primary" size="sm" className="max-sm:hidden">
              Explore Courses
            </Button>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-mist2 lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isActive={isActive}
        triggerRef={triggerRef}
      />
    </>
  );
}
