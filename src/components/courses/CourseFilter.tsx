'use client';

import { Search, X } from 'lucide-react';
import { courseFilters, type CourseFilter as Filter } from '@/data/courses';
import { cn } from '@/lib/utils';

/**
 * Search field + category chips. Purely presentational — all state lives in
 * CourseExplorer so the same bar can drive any grid.
 */
export function CourseFilterBar({
  query,
  onQueryChange,
  active,
  onFilterChange,
  resultCount,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  active: Filter;
  onFilterChange: (value: Filter) => void;
  resultCount: number;
}) {
  return (
    <div className="rounded-card border border-line bg-white p-4 shadow-softsm sm:p-5">
      {/* Search */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <label htmlFor="course-search" className="sr-only">
          Search courses
        </label>
        <input
          id="course-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search courses…"
          autoComplete="off"
          className={cn(
            'h-12 w-full rounded-full border border-line bg-mist pr-11 pl-11 text-[15px] text-ink',
            'placeholder:text-muted/80 focus:border-electric focus:bg-white focus:outline-none',
            'transition-colors',
          )}
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-mist2 hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter courses by category">
        {courseFilters.map((filter) => {
          const isActive = filter === active;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              aria-pressed={isActive}
              className={cn(
                'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                isActive
                  ? 'g-blue text-white shadow-softsm'
                  : 'bg-mist2 text-muted hover:bg-electric/10 hover:text-electric',
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Live result count for screen readers and sighted users alike */}
      <p aria-live="polite" className="mt-3.5 text-sm text-muted">
        Showing <span className="font-semibold text-ink">{resultCount}</span>{' '}
        {resultCount === 1 ? 'course' : 'courses'}
        {active !== 'All' ? (
          <>
            {' '}
            in <span className="font-semibold text-ink">{active}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}
