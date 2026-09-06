export function WhatsAppIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.6-1.45-.83-1.98-.22-.53-.44-.46-.6-.46-.15 0-.32-.03-.5-.03-.17 0-.45.07-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.18 1.78 2.72 4.3 3.72 2.53 1 2.53.67 2.98.62.45-.04 1.46-.59 1.66-1.16.2-.57.2-1.06.15-1.16-.05-.1-.18-.15-.38-.3Z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.24-1.24A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.2c-1.56 0-3.02-.44-4.25-1.2l-.3-.18-3.1.73.74-3.02-.19-.31A8.15 8.15 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill={color} stroke="none" />
    </svg>
  );
}
