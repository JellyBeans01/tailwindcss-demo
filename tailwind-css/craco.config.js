const tailwindCSS = require("tailwindcss");
const autoPrefixer = require("autoprefixer");

module.exports = {
    style: {
        postcss: {
            plugins: [tailwindCSS, autoPrefixer],
        },
    },
};
