module.exports = {

    extends: ["eslint:recommended", "google"],

    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module"

    },

    globals: {
        MyGlobal: true
    },

    rules: {
        "new-cap": 0,
        "linebreak-style": ["error", "windows"],
        "no-undef": 0,
        "padded-blocks": ["error", "always"],
        "comma-dangle": 0,
        "no-console": 0,
        "max-len": [2, {
          "code": 150,
          "tabWidth": 2,
          "ignoreUrls": true,
          "ignorePattern": '^goog\.(module|require)',
          "ignoreComments": true
        }],
        "arrow-parens": [2, 'as-needed'],
        "require-jsdoc": 0
    }

};
