import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { EditableBadge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';
import { TutorAvatar } from './TutorAvatar';
import { type Tutor } from '@/data/tutors';
import { cn } from '@/lib/utils';

export function TutorCard({ tutor, className }: { tutor: Tutor; className?: string }) {
  const placeholder = tutor.isPlaceholder;

  return (
    <article
      className={cn(
        'card-hover flex h-full flex-col rounded-card border bg-white p-6 shadow-softsm',
        placeholder ? 'border-dashed border-line' : 'border-line hover:border-electric/25',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <TutorAvatar {...tutor} size="card" className={cn(placeholder && 'opacity-70')} />

        <div className="min-w-0">
          <h3 className={cn('t-card-title', placeholder ? 'text-muted/70' : 'text-ink')}>
            {tutor.name}
          </h3>
          <p className="t-small mt-1 text-electric">{tutor.roles.join(' · ')}</p>
          {tutor.specialisation ? (
            <p className={cn('mt-1 text-[13px]', placeholder ? 'text-muted/60 italic' : 'text-muted')}>
              {tutor.specialisation}
            </p>
          ) : null}
        </div>
      </div>

      {placeholder ? <EditableBadge className="mt-4 self-start">Editable profile</EditableBadge> : null}

      {/* Education / experience line — only what was actually supplied. */}
      {!placeholder && (tutor.education || tutor.experience) ? (
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-semibold text-ink">
          {tutor.education ? <span>{tutor.education}</span> : null}
          {tutor.education && tutor.experience ? (
            <span aria-hidden="true" className="size-1 rounded-full bg-muted/40" />
          ) : null}
          {tutor.experience ? (
            <span className="text-muted">{tutor.experience} experience</span>
          ) : null}
        </p>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-2">
        {tutor.skills.slice(0, 4).map((skill, index) => (
          <li key={`${skill}-${index}`}>
            <Chip className={cn('text-[13px]', placeholder && 'text-muted/60 italic')}>{skill}</Chip>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <ul className="flex items-center gap-2">
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
                    className="flex size-9 items-center justify-center rounded-full bg-mist text-muted transition-colors hover:bg-electric hover:text-white"
                  >
                    <SocialIcon name={network} className="size-4" />
                  </a>
                ) : (
                  <span
                    title={`${label} — add a link in src/data/tutors.ts`}
                    className="flex size-9 items-center justify-center rounded-full border border-dashed border-line text-muted/40"
                  >
                    <SocialIcon name={network} className="size-4" />
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {placeholder ? (
          <span className="text-sm font-semibold text-muted/50">View Profile</span>
        ) : (
          <Link
            href={`/tutors#${tutor.slug}`}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-electric transition-colors hover:text-royal"
          >
            View Profile
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
            <span className="sr-only"> — {tutor.name}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
