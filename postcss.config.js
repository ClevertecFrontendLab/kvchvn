import autoprefixer from 'autoprefixer';
import extend from 'postcss-extend';
import postcssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';

export default {
    plugins: [postcssImport(), vars(), mixins(), extend(), nested(), autoprefixer()],
};
