/**
 * Tiny classname joiner. Kept dependency-free on purpose — the whole site only
 * ever needs conditional class merging, not full `tailwind-merge` resolution.
 *
 * Accepts anything so that `someNode && 'class'` guards work regardless of what
 * the guard's type happens to be; only non-empty strings survive.
 */
export function cn(...parts: unknown[]): string {
  return parts.filter((part): part is string => typeof part === 'string' && part !== '').join(' ');
}
