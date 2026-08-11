'use client';

import { useRef, useState } from 'react';
import { AlertCircle, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { contactDetails, formSubmitAction } from '@/data/contact';
import { getCourseTitles } from '@/data/courses';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* How this form delivers                                                      */
/* -------------------------------------------------------------------------- */
/**
 * This site is frontend-only — no server, no API route, no database — so the
 * inquiry is posted straight to FormSubmit, which emails it to
 * `contactDetails.email`. There are no keys or secrets involved: the endpoint
 * is just the public address, and FormSubmit's own captcha handles spam.
 *
 * It is a plain HTML POST rather than a fetch() call on purpose. `_captcha`
 * needs a real page to render its challenge, so an AJAX submission would break
 * spam protection. The browser therefore navigates to FormSubmit's confirmation
 * page, which is also why this component never claims an inquiry was delivered
 * — only FormSubmit can say that.
 *
 * FIRST-RUN ACTIVATION: the first submission from the live site triggers an
 * activation email to `contactDetails.email`. Until someone opens it and
 * confirms, nothing is forwarded.
 *
 * OPTIONAL — return visitors to our own thank-you page instead of FormSubmit's:
 * once the real production domain is confirmed, add a `/thank-you` route and a
 * hidden field `<input type="hidden" name="_next" value="https://<domain>/thank-you/" />`.
 * It must be an absolute URL on the live domain; localhost will not work.
 */

type FormValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  course: string;
  message: string;
};

type FieldName = keyof FormValues;

/**
 * The `name` attributes that travel to the inbox. FormSubmit uses them as the
 * labels in the notification email, so they read as words, not code.
 */
const FIELD_NAMES: Record<FieldName, string> = {
  name: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  organization: 'School or Organization',
  course: 'Interested Course',
  message: 'Message',
};

const MESSAGE_MAX_LENGTH = 2000;

const emptyValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  course: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'offline';

/* -------------------------------------------------------------------------- */
/* Validation — client-side, on top of the browser's own                       */
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
  const isSubmitting = status === 'submitting';

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

  /**
   * Runs before the browser posts to FormSubmit. It only ever *stops* the
   * submission — it never fakes one. If everything is valid the default POST
   * goes ahead and the browser lands on FormSubmit's confirmation page.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Already on its way — ignore a second click or a double Enter.
    if (isSubmitting) {
      event.preventDefault();
      return;
    }

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
      event.preventDefault();
      setStatus('idle');
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${FIELD_NAMES[firstError]}"]`)
        ?.focus();
      return;
    }

    // No connection means the POST cannot leave the device — say so plainly
    // instead of navigating into a browser error page.
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      event.preventDefault();
      setStatus('offline');
      return;
    }

    setStatus('submitting');
  }

  return (
    <form
      ref={formRef}
      action={formSubmitAction}
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      {/* FormSubmit configuration — no secrets, all public settings. */}
      <input type="hidden" name="_subject" value={`New ${siteConfig.name} Website Inquiry`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      {/* Honeypot: bots fill it, people never see it. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <h3 className="t-h3 text-ink">Send an Inquiry</h3>
      <p className="t-small mt-2 text-muted">
        Tell us who you are and what you are looking for. Fields marked
        <span className="text-electric"> *</span> are required.
      </p>

      {status === 'offline' ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-tile border border-[#F5C2C0] bg-[#FDF0EF] px-4 py-3 text-sm text-[#9B2C24]"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            We could not send your inquiry. Please try again or email us directly at{' '}
            <a
              href={`mailto:${contactDetails.email}`}
              aria-label={`Email ${siteConfig.name}`}
              className="font-semibold underline underline-offset-2 hover:no-underline"
            >
              {contactDetails.email}
            </a>
            .
          </span>
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          field="name"
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
          field="email"
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
          field="phone"
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
          field="organization"
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
            name={FIELD_NAMES.course}
            value={values.course}
            onChange={(event) => update('course', event.target.value)}
            className={cn(
              'h-12 w-full rounded-xl border border-line bg-mist px-4 text-[16px] text-ink sm:text-[15px]',
              'focus:border-electric focus:bg-white',
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
            name={FIELD_NAMES.message}
            rows={5}
            required
            maxLength={MESSAGE_MAX_LENGTH}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            onBlur={() => blur('message')}
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined}
            placeholder="Tell us about your school, your group, or the course you are interested in."
            className={cn(
              'w-full resize-y rounded-xl border bg-mist px-4 py-3 text-[16px] text-ink sm:text-[15px]',
              'placeholder:text-muted/75 focus:bg-white transition-colors',
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

      <Button type="submit" kind="accent" size="lg" fullWidth disabled={isSubmitting} className="mt-7">
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

      {/* Announced by screen readers as soon as the submission starts. */}
      <p role="status" aria-live="polite" className="sr-only">
        {isSubmitting ? 'Sending your inquiry. Please wait.' : ''}
      </p>

      <p className="t-small mt-4 text-center text-muted">
        The information you provide will be used only to respond to your inquiry.
      </p>

      <p className="t-small mt-2 text-center text-muted">
        Prefer not to use the form? Email{' '}
        <a
          href={`mailto:${contactDetails.email}`}
          aria-label={`Email ${siteConfig.name}`}
          className="font-semibold text-electric hover:underline"
        >
          {contactDetails.email}
        </a>{' '}
        or call{' '}
        {contactDetails.phones.map((phone, index) => (
          <span key={phone.href}>
            {index > 0 ? ' or ' : ''}
            <a
              href={phone.href}
              aria-label={`Call ${siteConfig.name} at ${phone.display}`}
              className="font-semibold text-electric hover:underline"
            >
              {phone.display}
            </a>
          </span>
        ))}
        .
      </p>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Field primitives                                                            */
/* -------------------------------------------------------------------------- */

function Field({
  label,
  field,
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
  field: FieldName;
  value: string;
  error?: string;
  onChange: (field: FieldName, value: string) => void;
  onBlur: (field: FieldName) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} {required ? <span className="text-electric">*</span> : null}
      </label>

      <input
        id={id}
        name={FIELD_NAMES[field]}
        type={type}
        required={required}
        maxLength={200}
        value={value}
        onChange={(event) => onChange(field, event.target.value)}
        onBlur={() => onBlur(field)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-12 w-full rounded-xl border bg-mist px-4 text-[16px] text-ink sm:text-[15px]',
          'placeholder:text-muted/75 focus:bg-white transition-colors',
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
