import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryBookSelect as NftCard } from './index';


console.log('nft', NftCard.Default)
export default {
  title: 'NftCard',
  component: NftCard.Default,
  argTypes: {
    glow: { control: 'color' },
    gradientColors: { control: 'text' }
  },
} as ComponentMeta<typeof NftCard.Default>;

const Template: ComponentStory<typeof NftCard.Default> = (args) => <NftCard.Default {...args} />

export const Default = Template.bind({});
Default.args = {
};