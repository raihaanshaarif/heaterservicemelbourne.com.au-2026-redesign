/**
 * Icon Component - Replaces Font Awesome with Lucide React icons
 * 
 * Migration from Font Awesome to Lucide React achieves:
 * - Tree-shaking: Only bundle icons actually used (~10-20KB vs 500KB+ for FA fonts)
 * - No external CSS required (FA needed font-awesome-all.css ~100KB)
 * - Modern SVG-based icons, better for performance
 * - Total savings: ~600KB+ (fonts + CSS)
 * 
 * Usage:
 *   <Icon name="phone" className="custom-class" />
 *   <Icon name="check" size={20} />
 */

import {
  Phone,
  PhoneCall,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Menu,
  Check,
  Star,
  Quote,
  Play,
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FileText,
  Download,
  ShoppingCart,
  MessageCircle,
  Snowflake,
  Shield,
  Award,
  Wrench,
  Zap,
  DollarSign,
  HelpCircle,
  Headphones,
  X,
  Search,
  ChevronDown,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";

type IconName =
  | "phone"
  | "phone-alt"
  | "envelope"
  | "calendar"
  | "calendar-alt"
  | "clock"
  | "map-marker-alt"
  | "bars"
  | "check"
  | "star"
  | "quote-left"
  | "play"
  | "cogs"
  | "chevron-left"
  | "chevron-right"
  | "arrow-right"
  | "file-pdf"
  | "cloud-download"
  | "shopping-cart"
  | "comments"
  | "snowflake"
  | "shield-alt"
  | "certificate"
  | "tools"
  | "bolt"
  | "dollar-sign"
  | "question-circle"
  | "headset"
  | "times"
  | "search"
  | "chevron-down"
  | "exclamation-triangle";

const iconMap: Record<IconName, LucideIcon> = {
  phone: Phone,
  "phone-alt": PhoneCall,
  envelope: Mail,
  calendar: Calendar,
  "calendar-alt": Calendar,
  clock: Clock,
  "map-marker-alt": MapPin,
  bars: Menu,
  check: Check,
  star: Star,
  "quote-left": Quote,
  play: Play,
  cogs: Settings,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "arrow-right": ArrowRight,
  "file-pdf": FileText,
  "cloud-download": Download,
  "shopping-cart": ShoppingCart,
  comments: MessageCircle,
  snowflake: Snowflake,
  "shield-alt": Shield,
  certificate: Award,
  tools: Wrench,
  bolt: Zap,
  "dollar-sign": DollarSign,
  "question-circle": HelpCircle,
  headset: Headphones,
  times: X,
  search: Search,
  "chevron-down": ChevronDown,
  "exclamation-triangle": AlertCircle,
};

interface IconProps {
  /** Icon name (Font Awesome name without 'fa-' prefix) */
  name: IconName;
  /** Size in pixels (default: 24) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Stroke width (default: 2) */
  strokeWidth?: number;
  /** Aria label for accessibility */
  "aria-label"?: string;
}

export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 2,
  "aria-label": ariaLabel,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map. Please add it to Icon.tsx`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      aria-label={ariaLabel || name}
    />
  );
}
