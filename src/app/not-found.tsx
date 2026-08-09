import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="g-mist relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute -top-32 -right-20 size-96 rounded-full g-glow opacity-60" />
      </div>

      <Container className="relative flex flex-col items-center py-24 text-center lg:py-32">
        <Eyebrow align="center">Error 404</Eyebrow>

        <h1 className="t-hero mt-5 text-ink">This page does not exist</h1>

        <p className="t-body mt-4 max-w-md text-muted">
          The link may be out of date, or the page may have moved. Try the courses list or head back
          to the home page.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" kind="primary" size="lg" withArrow>
            Back to Home
          </Button>
          <Button href="/courses" kind="ghost" size="lg">
            Browse Courses
          </Button>
        </div>
      </Container>
    </section>
  );
}
