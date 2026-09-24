import { useId } from "react";

type LogoProps = { className?: string; compact?: boolean };

export function DatabricksLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#FF3621"
        d="M.95 14.184 12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z"
      />
    </svg>
  );
}

export function StripeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#635BFF"
        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z"
      />
    </svg>
  );
}

export function AndurilLogo({ className }: LogoProps) {
  return <img src="/logos/anduril-icon.png" alt="" className={className} />;
}

export function CrusoeLogo({ className }: LogoProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gid = `crusoe-g-${uid}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id={gid} x1="19" x2="5" y1="6" y2="18">
          <stop stopColor="#F4BF45" />
          <stop offset=".35" stopColor="#E48047" />
          <stop offset=".69" stopColor="#C73361" />
          <stop offset="1" stopColor="#A42F5F" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gid})`}
        d="M12 0 4.583 6.583c-3.23 2.869-3.23 7.965 0 10.834L12 24l7.417-6.583c3.23-2.869 3.23-7.965 0-10.834L12 0z"
      />
    </svg>
  );
}

export function RampLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E8FF3A" />
      <path
        fill="#111"
        d="M18.5 42.5 41 14.8c1.4-1.7 4.1-.4 3.7 1.8L38.4 44.2c-.3 1.6-2.1 2.5-3.6 1.8L18.8 36.4c-1.7-.8-1.8-3.2-.3-4.1z"
      />
      <path fill="#111" d="M34.2 46.2h14.6c1.6 0 2.5 1.8 1.5 3.1L44.6 57c-1 1.2-2.9 1.2-3.9 0l-8-10.7c-.9-1.2.1-3.1 1.5-3.1z" />
    </svg>
  );
}

export function HadrianLogo({ className, compact }: LogoProps) {
  if (compact) {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <text
          x="16"
          y="24"
          textAnchor="middle"
          fill="#111"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="22"
          fontWeight="700"
        >
          H
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 48" className={className} aria-hidden>
      <text
        x="140"
        y="36"
        textAnchor="middle"
        fill="#111"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="6"
      >
        HADRIAN
      </text>
    </svg>
  );
}

export function BlueOriginLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        fill="#0054A6"
        d="M8.5 48.5c8.2-3.4 14.4-4 18.6-2.2 3.2-7.6 8.4-16.4 16.8-25.4 2.2-2.4 6.2-1.6 6.8 1.6 1.4 7.6-1.2 16.4-6.4 24.8 5.8 3.4 11.2 8.6 14.2 14.2-8.8-2.2-18.6-2.6-27.6.4-4.2 1.4-8.6-1.8-7.4-6.4 1-3.8 4.4-6.2 8.4-6.8-4.4 1.2-10.6 3.4-15.6 6.2-3.2 1.8-6.6-.6-5.8-5.4z"
      />
      <path
        fill="#003E7E"
        d="M36.4 22.8c4.8 6.8 8.2 14.2 9.6 21.4-5.6-6.8-10.2-12.2-14.8-16.2 1.4-2 3.2-3.8 5.2-5.2z"
      />
    </svg>
  );
}

export function KalshiLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="14" fill="#00C805" />
      <path
        fill="#fff"
        d="M18 16h8.2v13.4L38.6 16H48L33.2 31.6 48 48h-9.6L26.2 33.8V48H18V16z"
      />
    </svg>
  );
}

export function ElevenLabsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#111" d="M4.6 0h4.93v24H4.6V0zm9.86 0h4.93v24h-4.93V0z" />
    </svg>
  );
}

export function PositronLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <polygon
        fill="none"
        stroke="#5EEAD4"
        strokeWidth="2.2"
        points="32 6 54 19 54 45 32 58 10 45 10 19"
      />
      <path
        fill="none"
        stroke="#5EEAD4"
        strokeWidth="2.6"
        strokeLinecap="round"
        d="M22 42c0-9 7-11.5 11-11.5s11 4.5 11 2-4.5-9-11-9-13.5 7-11.2 16c1.6 6.2 9 9 15.5 6.4"
      />
      <circle cx="22" cy="46" r="2.2" fill="#5EEAD4" />
      <circle cx="44" cy="21" r="2.2" fill="#5EEAD4" />
    </svg>
  );
}

export function FigureLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="8" fill="#111" />
      <rect x="34" y="10" width="16" height="16" rx="3.5" fill="#fff" />
      <rect x="14" y="24" width="16" height="16" rx="3.5" fill="#fff" />
      <rect x="34" y="24" width="16" height="16" rx="3.5" fill="#fff" />
      <rect x="34" y="38" width="16" height="16" rx="3.5" fill="#fff" />
    </svg>
  );
}

export function LambdaLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#111" />
      <path fill="#fff" d="M18 50 30.2 16h5.2L24.6 40.2 42 50h-6.4L23.8 41.2 20.6 50H18Z" />
    </svg>
  );
}

export function SaronicLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#0c2340" />
      <path fill="#fff" d="M10 40h44l-6 6H16l-6-6Z" />
      <path fill="none" stroke="#fff" strokeWidth="2.4" d="M14 32c6-6 10-6 16 0s10 6 16 0" />
    </svg>
  );
}

export function ShieldAiLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#1a1a1a" />
      <path
        fill="#fff"
        d="M32 12 48 18.5v14.2c0 9.2-6.4 16.6-16 19.3-9.6-2.7-16-10.1-16-19.3V18.5L32 12Z"
      />
      <path fill="#1a1a1a" d="M32 20 42 23.4v8.2c0 5.4-3.8 9.8-10 11.4-6.2-1.6-10-6-10-11.4v-8.2L32 20Z" />
    </svg>
  );
}

export function LightmatterLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#0e0b1f" />
      <path fill="#7cf0ff" d="M32 12 48 44H16L32 12Z" />
      <path fill="#b8a4ff" d="M32 22 42 44H22L32 22Z" />
    </svg>
  );
}

const MAP = {
  databricks: DatabricksLogo,
  stripe: StripeLogo,
  anduril: AndurilLogo,
  crusoe: CrusoeLogo,
  ramp: RampLogo,
  hadrian: HadrianLogo,
  "blue-origin": BlueOriginLogo,
  kalshi: KalshiLogo,
  elevenlabs: ElevenLabsLogo,
  positron: PositronLogo,
  figure: FigureLogo,
  lambda: LambdaLogo,
  saronic: SaronicLogo,
  "shield-ai": ShieldAiLogo,
  lightmatter: LightmatterLogo,
} as const;

export function CompanyLogo({
  slug,
  className,
  compact,
}: {
  slug: string;
  className?: string;
  compact?: boolean;
}) {
  const Cmp = MAP[slug as keyof typeof MAP];
  if (!Cmp) return null;
  return <Cmp className={className} compact={compact} />;
}
