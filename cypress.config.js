"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        screenshotsFolder: "cypress/report/screenshots",
        reporter: "mochawesome",
        reporterOptions: {
            html: false,
            json: true,
            reportDir: "cypress/report",
            reportFilename: "report",
            overwrite: true
        },
        setupNodeEvents: function (on, config) {
            // implement node event listeners here
        },
    },
    component: {
        devServer: {
            framework: "create-react-app",
            bundler: "webpack",
        },
    },
});
