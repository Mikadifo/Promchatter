/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            blue: '#1E4B8C',
            black: 'rgba(0, 0, 0, 0.75)',
            gray: '#808080',
            white: '#F5F5F5',
            purewhite: '#FFFFFF',
            green: '#00A67C',
            orange: '#FF8000',
        },
        extend: {
            fontFamily: {
                lato: ['var(--font-lato)'],
                raleway: ['var(--font-raleway)'],
            },
        },
    },
    plugins: [],
};
