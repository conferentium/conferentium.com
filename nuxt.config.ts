// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    css: ['~/assets/css/main.css'],
    head: {
        script: [
            {
                src: "/assets/libs/wow.js/wow.min.js",
                body: true,
            },
            {
                src: "/assets/libs/tobii/js/tobii.min.js",
                body: true,
            },
            {
                src: "/assets/libs/tiny-slider/min/tiny-slider.js",
                body: true,
            },
            {
                src: "/assets/libs/feather-icons/feather.min.js",
                body: true,
            },
            {
                src: "/assets/js/plugins.init.js",
                body: true,
            },
            {
                src: "/assets/js/app.js",
                body: true,
            },
        ],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
