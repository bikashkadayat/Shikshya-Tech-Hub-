import {
  Award,
  BarChart3,
  Blocks,
  BookOpen,
  Bot,
  Brain,
  Building2,
  CalendarClock,
  Camera,
  ClipboardCheck,
  Clock,
  Code2,
  Compass,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  MessageSquare,
  Monitor,
  PenTool,
  Presentation,
  Puzzle,
  RefreshCw,
  Rocket,
  School,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
  Video,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/**
 * Central icon registry.
 *
 * Data files reference icons by name (a plain string) so that `src/data/*.ts`
 * stays serialisable and free of React imports.
 *
 * NOTE: every icon listed here is bundled, whether or not it is used — this
 * object holds a live reference to each one, so tree-shaking cannot drop them.
 * Keep it to icons the site actually renders. To use a new icon, import it from
 * `lucide-react` and add one line below.
 */
export const icons = {
  award: Award,
  blocks: Blocks,
  book: BookOpen,
  brain: Brain,
  building: Building2,
  calendar: CalendarClock,
  camera: Camera,
  chart: BarChart3,
  chat: MessageSquare,
  check: ClipboardCheck,
  clock: Clock,
  code: Code2,
  compass: Compass,
  globe: Globe,
  graduation: GraduationCap,
  handshake: Handshake,
  headphones: Headphones,
  monitor: Monitor,
  pen: PenTool,
  presentation: Presentation,
  puzzle: Puzzle,
  refresh: RefreshCw,
  robot: Bot,
  rocket: Rocket,
  school: School,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  userCheck: UserCheck,
  users: Users,
  video: Video,
  wrench: Wrench,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName): LucideIcon {
  return icons[name];
}
