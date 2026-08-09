'use client';

import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { courses, type CourseFilter as Filter } from '@/data/courses';
import { CourseFilterBar } from './CourseFilter';
import { CourseGrid } from './CourseGrid';

/**
 * Client-side course search + filtering. No API, no server — the full course
 * list is bundled with the page and filtered in memory.
 */
export function CourseExplorer() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('All');

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = filter === 'All' || course.category === filter;
      if (!matchesCategory) return false;
      if (!needle) return true;

      // Search title, summary, category, level and the tool list.
      const haystack = [
        course.title,
        course.summary,
        course.category,
        course.level,
        ...course.tools,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [query, filter]);

  const isFiltered = query.trim() !== '' || filter !== 'All';

  return (
    <div className="flex flex-col gap-8">
      <CourseFilterBar
        query={query}
        onQueryChange={setQuery}
        active={filter}
        onFilterChange={setFilter}
        resultCount={results.length}
      />

      {results.length > 0 ? (
        <CourseGrid courses={results} animate={!isFiltered} />
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-card border border-dashed border-line bg-white px-6 py-16 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-mist2 text-muted">
            <SearchX className="size-6" aria-hidden="true" />
          </span>
          <h3 className="t-card-title text-ink">No courses match that search</h3>
          <p className="t-small max-w-sm text-muted">
            Try a different keyword, or clear the filters to see all nine courses.
          </p>
          <Button
            kind="ghost"
            size="sm"
            onClick={() => {
              setQuery('');
              setFilter('All');
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
