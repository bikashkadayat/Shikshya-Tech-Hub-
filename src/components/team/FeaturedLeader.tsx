import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { TeamAvatar } from './TeamAvatar';
import { executiveLeader, type TeamMember } from '@/data/team';

/**
 * Compact leadership block at the top of /our-team.
 *
 * The name, role and portrait come from `src/data/team.ts`, which reads them
 * from `src/data/leadership.ts` — the same record behind the "Message from the
 * CEO" block on /tutors. The full message is deliberately NOT repeated here;
 * this block stays short so the four-member grid below it is reachable without
 * a long scroll.
 *
 * The two supporting paragraphs are general website copy about the
 * organisation. They are not a quotation and are not attributed to anyone, so
 * they carry no quotation marks and no signature.
 *
 * The portrait is a full-body composition on a dark background, so the panel
 * uses `fit="contain"` on black: the supplied image is shown whole, never
 * cropped into, at a fixed modest size that does not stretch to the height of
 * the text beside it.
 */
export function FeaturedLeader({ leader = executiveLeader }: { leader?: TeamMember }) {
  return (
    <Section tone="white" size="md">
      <Reveal>
        <div className="rounded-card border border-line bg-mist p-6 shadow-softsm sm:p-8 lg:p-10">
          {/* `items-start` keeps the portrait beside the heading instead of
              stretching it to the full height of the copy. */}
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-12">
            <figure className="flex justify-center lg:pt-1">
              <TeamAvatar
                name={leader.name}
                initials={leader.initials}
                profileImage={leader.profileImage}
                imageAlt={leader.imageAlt}
                imagePosition={leader.imagePosition}
                size="featured"
                fit="contain"
                gradient="bg-black"
                className="border-electric/25"
              />
            </figure>

            <div className="flex flex-col gap-5">
              <Eyebrow>Leadership</Eyebrow>

              <div className="flex flex-col gap-1.5">
                <h2 className="t-h2 text-ink">{leader.name}</h2>
                <p className="t-small font-semibold text-electric">{leader.role}</p>
              </div>

              <div className="flex max-w-[68ch] flex-col gap-4">
                <p className="t-body text-muted">
                  At Sikshya Tech Hub, leadership is focused on creating a practical, accessible,
                  and supportive environment for technology learning.
                </p>
                <p className="t-body text-muted">
                  This page introduces the people responsible for leadership, operations, technical
                  direction, finance, marketing, workforce management, human resources, and
                  logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
