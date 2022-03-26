import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryBookSelect as Input } from '.';

export default {
  title: 'Input Text',
  component: Input.Default,
  argTypes: {
    textColor: { control: 'color' },
    color: { control: 'color' },
    glow: { control: 'color' },
    border: { control: 'text' },
    gradientColors: { control: 'text' },
    fontSize: { control: 'text' },
    transparency:{ control: 'number' }
  },
} as ComponentMeta<typeof Input.Default>;

const Template: ComponentStory<typeof Input.Default> = (args) => <Input.Default {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};