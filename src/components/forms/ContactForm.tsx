'use client';

import { useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getCourseTitles } from '@/data/courses';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Connecting this form to a real service                                      */
/* -------------------------------------------------------------------------- */
/**
 * This site is frontend-only, so nothing is delivered anywhere by default and
 * the form never claims otherwise.
 *
 * To make it actually send, set FORM_ENDPOINT to a URL that accepts a JSON
 * POST — for example a Formspree / Web3Forms / Getform endpoint, or your own
 * Cloudflare Worker. Everything else already works:
 *
 *   const FORM_ENDPOINT: string | null = 'https://formspree.io/f/xxxxxxx';
 *
 * The payload shape is `FormValues` below.
 */
const FORM_ENDPOINT: string | null = null;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  course: string;
  message: string;
};

type FieldName = keyof FormValues;

const emptyValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  course: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'validated' | 'sent' | 'error';

/* -------------------------------------------------------------------------- */
/* Validation — client-side only                                               */
/* -------------------------------------------------------------------------- */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d][\d\s()+-]{5,19}$/;

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'That name looks too short.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  // Phone is optional, but must look like a phone number when provided.
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number, or leave this blank.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us what you need.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).';
  }

  return errors;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const courseTitles = getCourseTitles();

  function update(field: FieldName, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));

    // Re-validate a field the moment the user fixes it.
    if (touched[field]) {
      const next = validate({ ...values, [field]: value });
      setErrors((previous) => ({ ...previous, [field]: next[field] }));
    }
  }

  function blur(field: FieldName) {
    setTouched((previous) => ({ ...previous, [field]: true }));
    const next = validate(values);
    setErrors((previous) => ({ ...previous, [field]: next[field] }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      organization: true,
      course: true,
      message: true,
    });

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      setStatus('idle');
      formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      return;
    }

    setStatus('submitting');

    // No endpoint configured — validate, then say plainly that nothing was sent.
    if (!FORM_ENDPOINT) {
      // Small deliberate pause so the loading state is perceivable.
      await new Promise((resolve) => setTimeout(resolve, 550));
      setStatus('validated');
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      setStatus('sent');
      setValues(emptyValues);
      setTouched({});
    } catch {
      setStatus('error');
    }
  }

  /* ----------------------------- Result states ---------------------------- */

  if (status === 'validated' || status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-card border border-line bg-white p-8 text-center shadow-soft sm:p-10"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-green/14 text-green-dark">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>

        {status === 'sent' ? (
          <>
            <h3 className="t-h3 mt-5 text-ink">Message sent</h3>
            <p className="t-body mt-3 max-w-sm text-muted">
              Thank you — we have received your enquiry and will get back to you.
            </p>
          </>
        ) : (
          <>
            <h3 className="t-h3 mt-5 text-ink">Your details check out</h3>
            <p className="t-body mt-3 max-w-md text-muted">
              Everything you entered is valid.{' '}
              <span className="font-semibold text-ink">
                Nothing has been sent yet — this form is not connected to a delivery service.
              </span>{' '}
              Connect one by setting <code className="font-mono text-[13px] text-electric">FORM_ENDPOINT</code>{' '}
              in <code className="font-mono text-[13px] text-electric">src/components/forms/ContactForm.tsx</code>.
            </p>
          </>
        )}

        <Button
          kind="ghost"
          size="sm"
          className="mt-6"
          onClick={() => {
            setStatus('idle');
            if (status === 'sent') setValues(emptyValues);
          }}
        >
          {status === 'sent' ? 'Send another message' : 'Back to the form'}
        </Button>
      </div>
    );
  }

  /* -------------------------------- Form ---------------------------------- */

  const isSubmitting = status === 'submitting';

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <h3 className="t-h3 text-ink">Send an Inquiry</h3>
      <p className="t-small mt-2 text-muted">
        Tell us who you are and what you are looking for. Fields marked
        <span className="text-electric"> *</span> are required.
      </p>

      {status === 'error' ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-tile border border-[#F5C2C0] bg-[#FDF0EF] px-4 py-3 text-sm text-[#9B2C24]"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Something went wrong while sending your message. Please try again in a moment.
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          value={values.name}
          error={touched.name ? errors.name : undefined}
          onChange={update}
          onBlur={blur}
          placeholder="Your full name"
          autoComplete="name"
        />

        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          error={touched.email ? errors.email : undefined}
          onChange={update}
          onBlur={blur}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={update}
          onBlur={blur}
          placeholder="Optional"
          autoComplete="tel"
        />

        <Field
          label="School / Organization"
          name="organization"
          value={values.organization}
          error={touched.organization ? errors.organization : undefined}
          onChange={update}
          onBlur={blur}
          placeholder="Optional"
          autoComplete="organization"
        />

        {/* Interested course */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-course" className="text-sm font-semibold text-ink">
            Interested Course
          </label>
          <select
            id="contact-course"
            name="course"
            value={values.course}
            onChange={(event) => update('course', event.target.value)}
            className={cn(
              'h-12 w-full rounded-xl border border-line bg-mist px-4 text-[15px] text-ink',
              'focus:border-electric focus:bg-white focus:outline-none',
              'transition-colors',
            )}
          >
            <option value="">Select a course (optional)</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
            <option value="Workshop">A workshop for our institution</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
            Message <span className="text-electric">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            onBlur={() => blur('message')}
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined}
            placeholder="Tell us about your school, your group, or the course you are interested in."
            className={cn(
              'w-full resize-y rounded-xl border bg-mist px-4 py-3 text-[15px] text-ink',
              'placeholder:text-muted/75 focus:bg-white focus:outline-none transition-colors',
              touched.message && errors.message
                ? 'border-[#E08A85] focus:border-[#D3564E]'
                : 'border-line focus:border-electric',
            )}
          />
          {touched.message && errors.message ? (
            <FieldError id="contact-message-error">{errors.message}</FieldError>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        kind="accent"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        className="mt-7"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="size-[18px] animate-spin" aria-hidden="true" />
            Sending…
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send className="size-[18px]" aria-hidden="true" />
            Send Inquiry
          </span>
        )}
      </Button>

      <p className="t-small mt-4 text-center text-muted">
        We only use your details to reply to this enquiry.
      </p>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Field primitives                                                            */
/* -------------------------------------------------------------------------- */

function Field({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  type = 'text',
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  onChange: (field: FieldName, value: string) => void;
  onBlur: (field: FieldName) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} {required ? <span className="text-electric">*</span> : null}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={() => onBlur(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-12 w-full rounded-xl border bg-mist px-4 text-[15px] text-ink',
          'placeholder:text-muted/75 focus:bg-white focus:outline-none transition-colors',
          error ? 'border-[#E08A85] focus:border-[#D3564E]' : 'border-line focus:border-electric',
        )}
      />

      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="flex items-center gap-1.5 text-[13px] text-[#C0392B]">
      <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
