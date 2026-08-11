import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { Container } from '@/components/ui/Container';
import { brandStatement, footerColumns, siteConfig, socialLinks } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="g-navy text-ondark">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:pr-8">
            <Link href="/" aria-label={`${siteConfig.name} home`} className="w-fit">
              <Logo height={40} variant="dark" />
            </Link>

            <p className="t-small max-w-sm text-onmute">{brandStatement}</p>

            <ul className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full bg-white/8 text-ondark ring-1 ring-white/12 transition-colors hover:bg-electric hover:text-white"
                    >
                      <SocialIcon name={social.icon} className="size-[18px]" />
                    </a>
                  ) : (
                    <span
                      aria-label={`${social.label} link not set yet`}
                      title={`${social.label}: add a link in src/data/site.ts`}
                      className="flex size-10 items-center justify-center rounded-full border border-dashed border-white/20 text-onmute/60"
                    >
                      <SocialIcon name={social.icon} className="size-[18px]" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h2 className="font-display text-[15px] font-bold text-white">{column.title}</h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-onmute transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-sm text-onmute">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="t-mono text-onmute/70">Learn · Practice · Create</p>
        </div>
      </Container>
    </footer>
  );
}
