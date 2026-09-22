import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      <defs>
        <linearGradient id="kwLogoGold" x1="20%" y1="10%" x2="80%" y2="95%">
          <stop offset="0%" stopColor="var(--color-gold-shine)" />
          <stop offset="30%" stopColor="var(--color-gold-light)" />
          <stop offset="65%" stopColor="var(--color-gold)" />
          <stop offset="100%" stopColor="var(--color-gold-dark)" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="62" stroke="url(#kwLogoGold)" strokeWidth="3" />
      <circle
        cx="100"
        cy="100"
        r="54"
        stroke="var(--color-gold-dark)"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      <text
        x="100"
        y="130"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontWeight="700"
        fontSize="78"
        fill="url(#kwLogoGold)"
      >
        K
      </text>

      <path
        d="M 140 66 L 160 44"
        stroke="url(#kwLogoGold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="164" cy="40" r="6" fill="url(#kwLogoGold)" />
      <path
        d="M 148 58 Q 156 50 160 44"
        stroke="url(#kwLogoGold)"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
