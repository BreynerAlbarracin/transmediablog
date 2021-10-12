const path = require('path');

module.exports = {
    resolve: {
        alias: {
            "@apis": path.resolve(__dirname, "src/apis/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@config": path.resolve(__dirname, "src/config/"),
            "@elements": path.resolve(__dirname, "src/elements/"),
            "@layouts": path.resolve(__dirname, "src/layouts/"),
            "@navigation": path.resolve(__dirname, "src/navigation/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@store": path.resolve(__dirname, "src/store/"),
        },
    },
};
    