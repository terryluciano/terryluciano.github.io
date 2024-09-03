/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            Inter: ['Inter', 'Arial', 'system-ui'],
            Poppins: ['Poppins', 'Arial', 'system-ui'],
        },
        extend: {
            colors: {
                light: {
                    text: '#070C1D',
                    bg: '#EFF1FB',
                    primary: '#A688E2',
                    secondary: '#3659CE',
                },
                dark: {
                    text: '#E2E7F8',
                    bg: '#040610',
                    primary: '#3B1D77',
                    secondary: '#3154C9',
                },
            },
        },
    },
    plugins: [],
};
