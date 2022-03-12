// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import web3theme from './web3theme';

addons.setConfig({
  theme: web3theme,
});