// Core
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// @ts-ignore
import FontminPlugin from 'fontmin-webpack';

// Constants
import { SOURCE_DIRECTORY, DEFAULT_APP_NAME } from '../constants';

const regExpImages = /\.(png|svg|jpg|jpeg|gif|webp)$/i;
const regExpFonts = /\.(woff|woff2|eot|ttf|otf)$/i;

export const connectHtml = (): Configuration => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: `${SOURCE_DIRECTORY}/index.handlebars`,
            title:    process.env.APP_NAME || DEFAULT_APP_NAME,
            favicon:  `${SOURCE_DIRECTORY}/favicon.ico`,
        }),
    ],
});

export const loadImagesDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: regExpImages,
                type: 'asset/resource',
            },
        ],
    },
});

export const loadImagesProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: regExpImages,
                type: 'asset/resource',
            },
        ],
    },
});

export const loadFontsDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: regExpFonts,
                type: 'asset/resource',
            },
        ],
    },
});

export const loadFontsProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: regExpFonts,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new FontminPlugin({
            autodetect:        true,
            glyphs:            [],
            allowedFilesRegex: null,
            skippedFilesRegex: null,
        }),
    ],
});
