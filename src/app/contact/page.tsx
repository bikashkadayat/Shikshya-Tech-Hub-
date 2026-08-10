import type { Metadata } from 'next';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactDetailList } from '@/components/sections/ContactSection';
import { FAQ } from '@/components/sections/FAQ';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { contactIntro } from '@/data/contact';
import { socialLinks } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Shikshya Tech Hub about courses, workshops or a technology programme for your school or college.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Let's Build the Future Together | Shikshya Tech Hub",
    description:
      'Contact us about courses, workshops, or running a technology programme at your institution.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="Get in Touch"
        title="Let's Build the Future Together"
        description="Questions about a course, a workshop for your school, or where to start? Send us a message and we will reply with something useful."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <Section tone="mist" size="md">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          {/* ---------------- Left: details + socials ---------------- */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Contact Information"
              title="How to Reach Us"
              subtitle="For more details, contact us by email or phone, or send an inquiry using the form."
            />

            <div>
              {/* Lead-in for the cards below. */}
              <p className="t-small font-semibold text-ink">{contactIntro}</p>
              <div className="mt-3">
                <ContactDetailList />
              </div>
            </div>

            <div>
              <h3 className="font-display text-[15px] font-bold text-ink">Follow along</h3>

              <ul className="mt-4 flex flex-wrap gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    {social.href ? (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-electric hover:text-electric"
                      >
                        <SocialIcon name={social.icon} className="size-[18px]" />
                        {social.label}
                      </a>
                    ) : (
                      <span
                        title={`${social.label} — add a link in src/data/site.ts`}
                        className="flex items-center gap-2.5 rounded-full border border-dashed border-line bg-white/60 px-4 py-2.5 text-sm font-semibold text-muted/60"
                      >
                        <SocialIcon name={social.icon} className="size-[18px]" />
                        {social.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------------- Right: form ---------------- */}
          <ContactForm />
        </div>
      </Section>

      <FAQ />
    </>
  );
}
