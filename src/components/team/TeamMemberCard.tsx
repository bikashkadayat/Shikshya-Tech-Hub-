import { TeamAvatar } from './TeamAvatar';
import { type TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';

/**
 * One team member: portrait (or initials), name, role. Nothing else.
 *
 * There is deliberately no biography, email, phone, social icon, rating or
 * "View profile" link — none of that was supplied, and the card never implies
 * information the site does not have.
 *
 * `h-full` makes every card in a row the same height, and the content stays
 * top-aligned so the portraits and names sit on the same line across the row —
 * a two-line role simply wraps downward into the shared spare height instead
 * of pushing its own name up out of alignment with its neighbours.
 */
export function TeamMemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'card-hover flex h-full flex-col items-center gap-5 rounded-card',
        'border border-line bg-white p-6 text-center shadow-softsm',
        'transition-colors hover:border-electric/25 sm:p-7',
        className,
      )}
    >
      <TeamAvatar
        name={member.name}
        initials={member.initials}
        profileImage={member.profileImage}
        imageAlt={member.imageAlt}
        imagePosition={member.imagePosition}
        gradient={member.gradient}
        size="card"
      />

      <div className="flex flex-col gap-1.5">
        <h3 className="t-card-title text-ink">{member.name}</h3>
        {/* `text-balance` keeps a wrapped two-line role evenly split rather
            than leaving one word stranded on the second line. */}
        <p className="t-small text-balance text-electric">{member.role}</p>
      </div>
    </article>
  );
}
