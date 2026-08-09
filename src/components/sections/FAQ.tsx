import { Accordion } from '@/components/ui/Accordion';
import { ArrowLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeFaqs } from '@/data/content';

export function FAQ() {
  return (
    <Section id="faq" tone="white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, Answered"
            subtitle="If something is not covered here, ask us directly — we will give you a straight answer."
          />
          <ArrowLink href="/contact" className="mt-6 w-fit">
            Ask a question
          </ArrowLink>
        </div>

        <Accordion items={homeFaqs} defaultOpen={0} />
      </div>
    </Section>
  );
}
