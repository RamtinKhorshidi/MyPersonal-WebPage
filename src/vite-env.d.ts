/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS settings for the contact form; see .env.example. */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
