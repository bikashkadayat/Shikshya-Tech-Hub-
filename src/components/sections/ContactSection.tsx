import { IconTile } from '@/components/ui/IconTile';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactCards } from '@/data/contact';
import { cn } from '@/lib/utils';

const gradients = ['g-blue', 'g-cyan', 'g-brand', 'g-green'];

/** Official contact detail tiles. Values come from src/data/contact.ts. */
export function ContactDetailList({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <ul className="flex flex-col gap-4">
      {contactCards.map((card, index) => (
        <li key={card.label}>
          <div
            className={cn(
              'flex items-center gap-4 rounded-card border p-4 sm:p-5',
              tone === 'dark'
                ? 'border-white/10 bg-white/5'
                : 'border-line bg-white shadow-softsm',
            )}
          >
            <IconTile icon={card.icon} gradient={gradients[index % gradients.length]} size="sm" />

            <div className="min-w-0">
              <p className={cn('t-mono', tone === 'dark' ? 'text-onmute/80' : 'text-muted')}>
                {card.label}
              </p>

              {/* One card can hold several entries — e.g. both phone numbers. */}
              <div className="mt-0.5 flex flex-col">
                {card.entries.map((entry) =>
                  entry.href ? (
                    <a
                      key={entry.display}
                      href={entry.href}
                      aria-label={entry.ariaLabel}
                      className={cn(
                        'block py-2 font-semibold break-words transition-colors',
                        tone === 'dark'
                          ? 'text-white hover:text-electric2'
                          : 'text-ink hover:text-electric',
                      )}
                    >
                      {entry.display}
                    </a>
                  ) : (
                    <p
                      key={entry.display}
                      className={cn(
                        'py-2 font-semibold break-words',
                        tone === 'dark' ? 'text-white' : 'text-ink',
                      )}
                    >
                      {entry.display}
                    </p>
                  ),
                )}
              </div>
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
