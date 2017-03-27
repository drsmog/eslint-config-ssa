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
        "padded-blocks": ["error", "always"]
    }

};
