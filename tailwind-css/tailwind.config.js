const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // remove unused styles in production build
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            primaryLight: colors.lightBlue["400"],
            primaryDark: colors.lightBlue["800"],
            secondary: colors.lightBlue["300"],
            white: colors.white,
            gray: colors.blueGray,
            dmPrimary: "#152141",
            dmLighterBlack: "#202d37",
            dmDarkBlack: "#04132D",
            dmGray: "#99aab5",
        },
        extend: {
            borderRadius: {
                "8px": "8px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
