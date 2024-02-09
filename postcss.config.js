import autoprefixer from 'autoprefixer';
import extend from 'postcss-extend';
import postcssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';

const VARS = {
    'character-light-title-85': '#262626',
    'character-light-primary-85': '#262626',
    'character-light-secondary-45': '#8c8c8c',
    'character-light-disable-25': '#bfbfbf',
    'character-light-border': '#d9d9d9',
    'character-light-dividers': '#f0f0f0',
    'character-light-background': '#f5f5f5',
    'character-light-table-header': '#fafafa',
    'character-light-error': '#ff4d4f',
    'character-light-warning': '#faad14',
    'character-light-link': '#1890ff',
    'character-light-success': '#52c41a',
    'character-light-red-4': '#ff7875',
    'character-light-primary-inverse': '#ffffff',
    'character-light-sidebar-background': '#ffffff',
    'primary-light-1': '#f0f5ff',
    'primary-light-2': '#d6e4ff',
    'primary-light-3': '#adc6ff',
    'primary-light-4': '#85a5ff',
    'primary-light-5': '#597ef7',
    'primary-light-6': '#2f54eb',
    'primary-light-7': '#1d39c4',
    'primary-light-8': '#10239e',
    'primary-light-9': '#061178',
    'primary-light-10': '#030852',
};

export default {
    plugins: [
        postcssImport(),
        vars({ variables: VARS }),
        mixins(),
        extend(),
        nested(),
        autoprefixer(),
    ],
};
