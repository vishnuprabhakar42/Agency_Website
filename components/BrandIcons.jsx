// Full-colour social logos (official brand colours). Pass a unique `id` when the
// Instagram logo appears more than once on a page so each gradient resolves.

export function LinkedInLogo({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <circle cx="7.2" cy="7.3" r="1.65" fill="#fff" />
      <rect x="5.8" y="9.7" width="2.8" height="8.6" rx="0.4" fill="#fff" />
      <path
        d="M11 9.7h2.7v1.2c.45-.75 1.45-1.4 2.85-1.4 2.6 0 3.25 1.7 3.25 4v4.8H17v-4.2c0-1-.1-2.3-1.55-2.3-1.4 0-1.65 1.1-1.65 2.2v4.3H11z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramLogo({ size = 20, id = 'ig', ...rest }) {
  const g = `${id}-grad`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <defs>
        <radialGradient id={g} cx="0.3" cy="1.07" r="1.15">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="0.75" stopColor="#C837AB" />
          <stop offset="1" stopColor="#3771C8" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${g})`} />
      <rect x="5.3" y="5.3" width="13.4" height="13.4" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.6" r="1.05" fill="#fff" />
    </svg>
  );
}
