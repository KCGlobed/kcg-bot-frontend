import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/widget.tsx",
        "./src/components/ChatWidget.tsx",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kcg-blue': '#1e3a8a', // Deep Royal Blue
                'kcg-gold': '#d4af37', // Classical Gold
            },
            fontFamily: {
                serif: ['Merriweather', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    corePlugins: {
        preflight: false, // Disable global styles reset
    },
    important: '#kcg-chat-widget-container', // Scope all styles to this ID
    plugins: [
        typography,
    ],
}
