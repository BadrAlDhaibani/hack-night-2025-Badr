/** @type {import('tailwindcss').Config} */
export default {
  content: [],  // Don't scan any files - we're not using utility classes
  corePlugins: {
    preflight: false,  // Disable Tailwind's CSS reset
  }
}
