import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { schoolChips } from '@/data/content';

/** The gBrand schools band on the home page. */
export function SchoolsCTA() {
  return (
    <section className="bg-white py-4 lg:py-8">
      <Container>
        <div className="g-brand relative overflow-hidden rounded-band px-6 py-12 shadow-softlg sm:px-10 lg:px-14 lg:py-16">
          {/* Decoration */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-16 size-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-28 left-1/4 size-64 rounded-full bg-white/8" />
          </div>

          <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <Eyebrow tone="dark" className="[&_span]:text-white">
                For Schools &amp; Institutions
              </Eyebrow>

              <h2 className="t-h2 mt-4 text-white">
                Bring Future-Ready Technology
                <br className="hidden sm:block" /> Education to Your School
              </h2>

              <p className="t-body mt-4 max-w-xl text-white/85">
                We design and deliver technology courses and workshops on site — shaped around your
                students, your subjects and your academic calendar.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {schoolChips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/25"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/schools" kind="white" size="lg" withArrow>
                Partner With Us
              </Button>
              <Button href="/contact" kind="outlineWhite" size="lg">
                Request a School Workshop
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
