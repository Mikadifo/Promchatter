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
        boxShadow: {
            bottom: [
                '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
                '0px 7px 15px 0px rgba(0, 0, 0, 0.10)',
                '0px 28px 28px 0px rgba(0, 0, 0, 0.09)',
                '0px 63px 38px 0px rgba(0, 0, 0, 0.05)',
                '0px 113px 45px 0px rgba(0, 0, 0, 0.01)',
                '0px 176px 49px 0px rgba(0, 0, 0, 0.00)',
            ],
        },
    },
    plugins: [],
};
