import { Check, Dot } from 'lucide-react';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TutorAvatar } from './TutorAvatar';
import { type Tutor } from '@/data/tutors';

/**
 * Detailed profile block for a published tutor.
 *
 * Renders only what the data file actually contains — every field here was
 * supplied by the tutor it describes.
 */
export function TutorProfile({ tutor }: { tutor: Tutor }) {
  return (
    <div
      id={tutor.slug}
      className="grid scroll-mt-28 gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-12"
    >
      {/* ---------- Left: profile card ---------- */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-card border border-line bg-white p-6 text-center shadow-soft">
          <TutorAvatar {...tutor} size="profile" className="mx-auto" />

          <h3 className="t-h3 mt-5 text-ink">{tutor.name}</h3>
          <p className="t-small mt-2 text-electric">{tutor.roles.join(' · ')}</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {tutor.education ? (
              <span className="inline-flex rounded-full bg-mist2 px-3 py-1 text-[13px] font-semibold text-ink">
                {tutor.education}
              </span>
            ) : null}
            {tutor.experience ? (
              <span className="inline-flex rounded-full bg-electric/8 px-3 py-1 text-[13px] font-semibold text-electric">
                {tutor.experience} experience
              </span>
            ) : null}
          </div>

          <ul className="mt-5 flex items-center justify-center gap-2.5">
            {(['linkedin', 'github'] as const).map((network) => {
              const href = tutor[network];
              const label = network === 'linkedin' ? 'LinkedIn' : 'GitHub';

              return (
                <li key={network}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${tutor.name} on ${label}`}
                      className="flex size-10 items-center justify-center rounded-full bg-mist text-muted transition-colors hover:bg-electric hover:text-white"
                    >
                      <SocialIcon name={network} className="size-[18px]" />
                    </a>
                  ) : (
                    <span
                      title={`${label}: add a link in src/data/tutors.ts`}
                      className="flex size-10 items-center justify-center rounded-full border border-dashed border-line text-muted/40"
                    >
                      <SocialIcon name={network} className="size-[18px]" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <Button href="/contact" kind="primary" fullWidth withArrow className="mt-6">
            Contact Tutor
          </Button>
        </div>
      </aside>

      {/* ---------- Right: about, highlights, specialisations, skills ---------- */}
      <div className="flex min-w-0 flex-col gap-8">
        <section>
          <Eyebrow>About</Eyebrow>
          <h3 className="t-h3 mt-4 text-ink">About {tutor.name.split(' ')[0]}</h3>
          <div className="mt-4 flex flex-col gap-4">
            {tutor.bio.map((paragraph, index) => (
              <p key={index} className="t-body text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {tutor.highlights.length > 0 ? (
          <section>
            <Eyebrow>Highlights</Eyebrow>
            <h3 className="t-h3 mt-4 text-ink">At a glance</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {tutor.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 rounded-tile bg-mist px-4 py-3"
                >
                  <Dot className="mt-0.5 size-5 shrink-0 text-electric" aria-hidden="true" />
                  <span className="t-small text-ink/85">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {tutor.specialisation ? (
          <section>
            <Eyebrow>Specializations</Eyebrow>
            <h3 className="t-h3 mt-4 text-ink">Areas of focus</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {tutor.specialisation.split('·').map((item) => (
                <li key={item}>
                  <Chip>{item.trim()}</Chip>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <Eyebrow>Skills</Eyebrow>
          <h3 className="t-h3 mt-4 text-ink">Teaches</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {tutor.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green/14 text-green-dark"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="t-small text-ink/85">{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
