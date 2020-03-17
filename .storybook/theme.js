import { create } from '@storybook/theming';
import gdsIcon from './static/geekster.png';

export default create({
    base: 'light',

    colorPrimary: 'pink',
    colorSecondary: '#41385c',

    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#41385c',
    appBorderRadius: 0,

    fontBase: '"Lato", sans-serif',
    fontCode: 'lato',

    textColor: '#41385c',
    textInverseColor: '#ffffff',

    barTextColor: '#41385c',
    barSelectedColor: '#41385c',
    barBg: '#dcdcdc',

    inputBg: '#ffffff',
    inputBorder: '#dcdcdc',
    inputTextColor: '#41385c',
    inputBorderRadius: 3,

    brandTitle: 'GDK',
    brandImage: gdsIcon
})