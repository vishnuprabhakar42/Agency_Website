// Small stroke icon set (24px grid, currentColor).
const P = ({ size = 20, sw = 1.8, children, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const Arrow = (p) => <P {...p}><path d="M5 12h14M13 6l6 6-6 6" /></P>;
export const ArrowUR = (p) => <P {...p}><path d="M7 17 17 7M8 7h9v9" /></P>;
export const Check = (p) => <P {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></P>;
export const Plus = (p) => <P {...p}><path d="M12 5v14M5 12h14" /></P>;
export const Chevron = (p) => <P {...p}><path d="m6 9 6 6 6-6" /></P>;
export const Menu = (p) => <P {...p}><path d="M4 8h16M4 16h16" /></P>;
export const Close = (p) => <P {...p}><path d="M6 6l12 12M18 6 6 18" /></P>;
export const Bell = (p) => <P {...p}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" /><path d="M10.3 20a1.9 1.9 0 0 0 3.4 0" /></P>;
export const Funnel = (p) => <P {...p}><path d="M3 4h18l-7 9v6l-4 2v-8z" /></P>;
export const Clock = (p) => <P {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></P>;
export const Plug = (p) => <P {...p}><path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0zM12 16v5" /></P>;
export const Chart = (p) => <P {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></P>;
export const Users = (p) => <P {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" /></P>;
export const Shield = (p) => <P {...p}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></P>;
export const Wallet = (p) => <P {...p}><rect x="3" y="6" width="18" height="14" rx="3" /><path d="M3 10h18M16 15h2" /></P>;
export const Calendar = (p) => <P {...p}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></P>;
export const Building = (p) => <P {...p}><path d="M4 21V5l8-3v19M12 8l8 3v10M2 21h20M8 8h0M8 12h0M8 16h0M16 14h0M16 18h0" /></P>;
export const Home = (p) => <P {...p}><path d="M3 11 12 3l9 8M5 9.5V21h14V9.5M10 21v-6h4v6" /></P>;
export const Umbrella = (p) => <P {...p}><path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9zM12 12v7a2 2 0 0 0 4 0" /></P>;
export const Bot = (p) => <P {...p}><rect x="4" y="8" width="16" height="12" rx="4" /><path d="M12 4v4M9 14h0M15 14h0M2 13v3M22 13v3" /></P>;
export const Code = (p) => <P {...p}><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></P>;
export const Flow = (p) => <P {...p}><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /><path d="M6.5 10v4a3 3 0 0 0 3 3H14" /></P>;
export const Megaphone = (p) => <P {...p}><path d="M3 10v4h4l8 5V5L7 10zM18 9a4 4 0 0 1 0 6" /></P>;
export const Wrench = (p) => <P {...p}><path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z" /><path d="M14.5 6.5 17 4l3 3-2.5 2.5" /></P>;
export const Sparkle = (p) => <P {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></P>;
export const Mail = (p) => <P {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></P>;
export const Phone = (p) => <P {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></P>;
export const Pin = (p) => <P {...p}><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></P>;
export const Layers = (p) => <P {...p}><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5" /></P>;
export const Doc = (p) => <P {...p}><path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6" /></P>;
export const Target = (p) => <P {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></P>;
export const Bolt = (p) => <P {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></P>;
export const Insta = (p) => <P {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h0" /></P>;
export const Linked = (p) => <P {...p}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10v6M8 7v.01M12 16v-6M12 13a3 3 0 0 1 6 0v3" /></P>;
