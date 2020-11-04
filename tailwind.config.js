const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                'primary' : '#E9EAEF',
                'secondary' : '#212121',
                'accent' : '#E9EAEF',

                'white-100' : '#E9EAEF',
                'black-900' : '#121212',
                'black-800' : '#252525',
                'black-700' : '#353535',
                'black-600' : '#505050',
            },

            gridTemplateColumns: {
                '24' : 'repeat(24, minmax(0, 1fr));',
            },

            gridColumn: {
                'span-24' : 'span 24 / span 24',
                'span-23' : 'span 23 / span 23',
                'span-22' : 'span 22 / span 22',
                'span-21' : 'span 21 / span 21',
                'span-20' : 'span 20 / span 20',
                'span-19' : 'span 19 / span 19',
                'span-18' : 'span 18 / span 18',
            }
        },

    },


    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [require('@tailwindcss/ui')],
};
