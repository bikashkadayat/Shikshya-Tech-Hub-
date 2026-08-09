import { Container } from '@/components/ui/Container';
import { IconTile } from '@/components/ui/IconTile';
import { Reveal } from '@/components/ui/Reveal';
import { stats } from '@/data/site';

/**
 * Stats strip.
 *
 * CONTENT RULE: no invented metrics. "9+" is simply the number of courses
 * actually listed on this site; the other three are qualitative statements
 * about how the teaching works, not claims about scale.
 */
export function Stats() {
  return (
    <section className="relative -mt-8 pb-4 lg:-mt-12">
      <Container>
        <ul className="grid gap-4 rounded-band border border-line bg-white p-4 shadow-soft sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={index * 80}>
              <div className="flex h-full items-center gap-4 rounded-tile bg-mist px-4 py-4">
                <IconTile icon={stat.icon} size="sm" gradient={index % 2 === 0 ? 'g-blue' : 'g-cyan'} />
                <div className="min-w-0">
                  <p className="font-display text-[19px] leading-tight font-extrabold text-ink">
                    {stat.value}
                  </p>
                  <p className="t-small mt-0.5 text-muted">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
