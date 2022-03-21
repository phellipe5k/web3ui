import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryBookSelect as Button } from '.';

export default {
  title: 'Button',
  component: Button.Default,
  argTypes: {
    textColor: { control: 'color' },
    color: { control: 'color' },
    glow: { control: 'color' },
    border: { control: 'text' },
    gradientColors: { control: 'text' },
    transparency:{ control: 'number' }
  },
} as ComponentMeta<typeof Button.Default>;

const Template: ComponentStory<typeof Button.Default> = (args) => <Button.Default {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
};

export const Gradient: ComponentStory<typeof Button.Gradient> = ((args: any) => <Button.Gradient { ...args } />).bind({});
Gradient.args = {
  label: 'Button'
};

export const BorderGradient: ComponentStory<typeof Button.BorderGradient> = ((args: any) => <Button.BorderGradient { ...args } />).bind({});
BorderGradient.args = {
  label: 'Button'
};

export const Transparent: ComponentStory<typeof Button.Transparent> = ((args: any) => <Button.Transparent { ...args } />).bind({});
Transparent.args = {
  label: 'Button'
};