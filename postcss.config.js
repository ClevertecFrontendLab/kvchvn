import autoprefixer from 'autoprefixer';
import { dirname, join } from 'path';
import extend from 'postcss-extend';
import postcssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    plugins: [
        postcssImport(),
        vars({ variables: { ...defineVariables() }, silent: false }),
        mixins(),
        mixins({ mixinsFiles: join(__dirname, 'src/styles/mixins.css') }),
        extend(),
        nested(),
        autoprefixer(),
    ],
};

export function defineVariables() {
    const colors = {
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
        'neutral-gray-1': '#ffffff',
        'neutral-gray-2': '#fafafa',
        'neutral-gray-3': '#f5f5f5',
        'neutral-gray-4': '#f0f0f0',
        'neutral-gray-5': '#d9d9d9',
        'neutral-gray-6': '#bfbfbf',
        'neutral-gray-7': '#8c8c8c',
        'neutral-gray-8': '#595959',
        'neutral-gray-9': '#434343',
        'neutral-gray-10': '#262626',
        'neutral-gray-11': '#1f1f1f',
        'neutral-gray-12': '#141414',
        'neutral-gray-13': '#000000',
    };

    const screens = {
        xl: '1280px',
        lg: '1024px',
        md: '',
    };

    return { ...colors, ...screens };
}
