import NaomisConfig from '@nhcarrigan/eslint-config';

export default [
    ...NaomisConfig,
    {
        rules: {
            'max-lines-per-function': 'off',
            'max-statements': 'off',
        }
    },
    {
        files: ['src/**/*.spec.ts'],
        rules: {
            'max-nested-callbacks': 'off',
        }
    }
];