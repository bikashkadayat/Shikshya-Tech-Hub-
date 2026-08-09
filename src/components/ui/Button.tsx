import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonKind = 'primary' | 'accent' | 'dark' | 'ghost' | 'white' | 'outlineWhite';

const kindStyles: Record<ButtonKind, string> = {
  // gBlue — the primary action everywhere.
  primary: 'g-blue text-white shadow-soft hover:shadow-lift',
  // gGreen with dark text, per the brand tokens.
  accent: 'g-green text-green-ink shadow-soft hover:shadow-lift',
  dark: 'bg-navy text-white hover:bg-ink shadow-soft',
  ghost: 'border-2 border-electric/35 text-electric hover:border-electric hover:bg-electric/6',
  white: 'bg-white text-electric shadow-soft hover:bg-mist',
  outlineWhite: 'border-2 border-white/45 text-white hover:border-white hover:bg-white/10',
};

const sizeStyles = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-[15px] gap-2',
  lg: 'h-[54px] px-7 text-base gap-2.5',
} as const;

type StyleProps = {
  children: React.ReactNode;
  kind?: ButtonKind;
  size?: keyof typeof sizeStyles;
  /** Appends the trailing arrow used across the design. */
  withArrow?: boolean;
  /** Stretch to the container width — used in the mobile menu and forms. */
  fullWidth?: boolean;
  className?: string;
};

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof StyleProps> & {
  href: string;
  /** Open in a new tab. Use for external destinations only. */
  external?: boolean;
};

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof StyleProps> & {
  href?: never;
  external?: never;
};

export type ButtonProps = StyleProps & (AnchorProps | NativeButtonProps);

/**
 * One button, five treatments. Renders a `next/link`, a plain anchor or a
 * native `<button>` depending on the props it is given.
 */
export function Button({
  children,
  kind = 'primary',
  size = 'md',
  withArrow = false,
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-full font-semibold',
    'transition-all duration-200 ease-out',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none',
    'hover:-translate-y-px active:translate-y-0',
    kindStyles[kind],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight
          className="size-[18px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (typeof rest.href === 'string') {
    const { href, external, ...anchorProps } = rest as AnchorProps;

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { href: _href, external: _external, ...buttonProps } = rest as NativeButtonProps;
  void _href;
  void _external;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}

/** Text link with the trailing arrow — "View Course →", "View All Tutors →". */
export function ArrowLink({
  href,
  children,
  tone = 'light',
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors',
        tone === 'dark' ? 'text-electric2 hover:text-white' : 'text-electric hover:text-royal',
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
