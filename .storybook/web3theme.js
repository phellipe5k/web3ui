// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#6443FF',
  colorSecondary: '#6c55d9',

  // UI
  appBg: '#1B1C1F',
  appContentBg: '#202124',
  appBorderColor: '#6443FF',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#262240',

  // Form colors
  inputBg: 'transparent',
  inputBorder: '#6443FF',
  inputTextColor: 'white',
  inputBorderRadius: 12,
  brandTitle: 'Web3 components',
  brandUrl: 'https://github.com/phellipe5k/web3ui',
  brandImage: 'https://github.com/phellipe5k/web3ui/blob/main/Screenshot_select-area_20220312161104.png?raw=true',
});