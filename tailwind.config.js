/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: "Roboto",
            colors: {
                iconColor: "#444746",
            },
            backgroundColor: {
                primary: "#F5F7F9",
                toolbar: "#EDF2FA",
            },
        },
    },
    plugins: [],
};
