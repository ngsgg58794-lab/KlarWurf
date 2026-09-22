import type { SVGProps } from "react";

export function CoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 17v14M20 20h8M20 28h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PendulumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M12 6h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 6v24" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="36" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="11" y="6" width="26" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M17 16h14M17 24h14M17 32h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
