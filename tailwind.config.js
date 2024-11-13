/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            xxs: '420px',
            xs: '500px',
            sm: '640px',
            md: '768px',
            md2: '800px',
            md3: '960px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1700px',
            '4xl': '1920px',
        },
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
            backgroundImage: {
                'light-gradient-0': 'linear-gradient(0deg, #A688E2 0%, #3659CE 100%)',
                'light-gradient-45': 'linear-gradient(45deg, #A688E2 0%, #3659CE 100%)',
                'light-gradient-90': 'linear-gradient(90deg, #A688E2 0%, #3659CE 100%)',
                'light-gradient-135': 'linear-gradient(135deg, #A688E2 0%, #3659CE 100%)',
                'light-gradient-180': 'linear-gradient(180deg, #A688E2 0%, #3659CE 100%)',
                'light-social-card': 'linear-gradient(360deg, #3659CE -100%, #A688E2 100%)',

                'dark-gradient-0': 'linear-gradient(0deg, #3B1D77 0%, #3154C9 100%)',
                'dark-gradient-45': 'linear-gradient(45deg, #3B1D77 0%, #3154C9 100%)',
                'dark-gradient-90': 'linear-gradient(90deg, #3B1D77 0%, #3154C9 100%)',
                'dark-gradient-135': 'linear-gradient(135deg, #3B1D77 0%, #3154C9 100%)',
                'dark-gradient-180': 'linear-gradient(180deg, #3B1D77 0%, #3154C9 100%)',
                'dark-social-card': 'linear-gradient(360deg, #3154C9 -100%, #3B1D77 100%)',
            },
            animation: {
                'hyper-pulse': 'hyper-pulse 0.75s ease-in-out infinite',
            },
            keyframes: {
                'hyper-pulse': {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        opacity: '0.8',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
            },

            dropShadow: {
                'light-shadow': '-2px 2px 4px 0px rgba(7 12 29 / 0.25)',
                'dark-shadow': '-2px 2px 4px 0px rgba(226, 231, 248, 0.25)',
            },
        },
    },
    plugins: [],
};
