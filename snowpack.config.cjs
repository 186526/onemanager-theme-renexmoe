/** @type {import("snowpack").SnowpackUserConfig}*/
module.exports = {
    mount: {
        "src/html_dist": "/",
        "src/js": "/renexmoe_assets/js",
        "src/css": "/renexmoe_assets/css"
    },
    plugins: [
        [
            '@snowpack/plugin-webpack',
            {
                sourceMap: true,
                htmlMinifierOptions: false,
                manifest:true,
            },
        ],
    ],
};