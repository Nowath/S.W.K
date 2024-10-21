/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "Background-Image": "url('src/assets/Background.jpg')",
            },
        },
    },
    plugins: [],
};
