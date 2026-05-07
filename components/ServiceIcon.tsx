/**
 * Simple line-style SVG icons for each service. Inherit currentColor.
 */
type Props = { name: string; className?: string };

const baseProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false as const,
};

export function ServiceIcon({ name, className = '' }: Props) {
  switch (name) {
    case 'septic':
      return (
        <svg {...baseProps} className={className}>
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
          <path d="M5 11c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
        </svg>
      );
    case 'driveways':
      return (
        <svg {...baseProps} className={className}>
          <path d="M9 21l-2-18M15 21l2-18" />
          <path d="M7 9h10M5 15h14" strokeDasharray="2 2" />
        </svg>
      );
    case 'ponds':
      return (
        <svg {...baseProps} className={className}>
          <path d="M3 14c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3.5-1.5 5 0 3 1.5 5 0" />
          <path d="M3 18c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3.5-1.5 5 0 3 1.5 5 0" />
          <path d="M9 8c0-2 1.5-3 3-3s3 1 3 3-3 4-3 4-3-2-3-4z" />
        </svg>
      );
    case 'land-clearing':
      return (
        <svg {...baseProps} className={className}>
          <path d="M12 3l4 6h-3v6h-2V9H8z" />
          <path d="M12 15v6M5 21h14" />
        </svg>
      );
    case 'utilities':
      return (
        <svg {...baseProps} className={className}>
          <path d="M3 12h6l2-3 2 6 2-3h6" />
          <circle cx="3" cy="12" r="1" />
          <circle cx="21" cy="12" r="1" />
        </svg>
      );
    case 'bush-hogging':
      return (
        <svg {...baseProps} className={className}>
          <path d="M4 18h16M6 18v-4M10 18v-6M14 18v-8M18 18v-5" />
          <path d="M2 21h20" />
        </svg>
      );
    case 'retaining-walls':
      return (
        <svg {...baseProps} className={className}>
          <rect x="3" y="14" width="6" height="3" />
          <rect x="9" y="14" width="6" height="3" />
          <rect x="15" y="14" width="6" height="3" />
          <rect x="6" y="11" width="6" height="3" />
          <rect x="12" y="11" width="6" height="3" />
          <rect x="9" y="8" width="6" height="3" />
          <path d="M3 20h18" />
        </svg>
      );
    case 'excavation':
    default:
      return (
        <svg {...baseProps} className={className}>
          <path d="M3 17h6l2-3 4 1 3-5 3 2v5z" />
          <circle cx="7" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
        </svg>
      );
  }
}
