import { EditableBadge } from '@/components/ui/Badge';
import { IconTile } from '@/components/ui/IconTile';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactDetails } from '@/data/site';
import { cn } from '@/lib/utils';

const gradients = ['g-blue', 'g-cyan', 'g-brand', 'g-green'];

/** Contact detail tiles — placeholders stay clearly labelled until filled in. */
export function ContactDetailList({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <ul className="flex flex-col gap-4">
      {contactDetails.map((detail, index) => (
        <li key={detail.label}>
          <div
            className={cn(
              'flex items-center gap-4 rounded-card border p-4 sm:p-5',
              tone === 'dark'
                ? 'border-white/10 bg-white/5'
                : 'border-line bg-white shadow-softsm',
            )}
          >
            <IconTile icon={detail.icon} gradient={gradients[index % gradients.length]} size="sm" />

            <div className="min-w-0">
              <p
                className={cn(
                  't-mono',
                  tone === 'dark' ? 'text-onmute/80' : 'text-muted',
                )}
              >
                {detail.label}
              </p>

              {detail.value ? (
                detail.href ? (
                  <a
                    href={detail.href}
                    className={cn(
                      'mt-1 block font-semibold break-words transition-colors',
                      tone === 'dark' ? 'text-white hover:text-electric2' : 'text-ink hover:text-electric',
                    )}
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p
                    className={cn(
                      'mt-1 font-semibold break-words',
                      tone === 'dark' ? 'text-white' : 'text-ink',
                    )}
                  >
                    {detail.value}
                  </p>
                )
              ) : (
                <p className="mt-1.5">
                  <EditableBadge>{detail.hint}</EditableBadge>
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** The contact block on the home page. */
export function ContactSection() {
  return (
    <Section id="contact" tone="mist">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="flex flex-col gap-7">
          <SectionHeading
            eyebrow="Get in Touch"
            title={
              <>
                Let&rsquo;s Build the Future
                <br />
                Together
              </>
            }
            subtitle="Whether you are a student choosing your first course or a school planning a programme, tell us what you need and we will come back with a straight answer."
          />

          <ContactDetailList />
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
