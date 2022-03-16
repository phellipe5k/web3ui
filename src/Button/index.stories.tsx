import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button.Default,
  argTypes: {
    textColor: { control: 'color' },
    color: { control: 'text' },
    glow: { control: 'color' }
  },
} as ComponentMeta<typeof Button.Default>;

const Template: ComponentStory<typeof Button.Default> = (args) => <Button.Default {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
};

export const Gradient: ComponentStory<typeof Button.Gradient> = (args: any) => <Button.Gradient { ...args } />;
Gradient.args = {
  label: 'Button'
};

export const BorderGradient: ComponentStory<typeof Button.BorderGradient> = (args: any) => <Button.BorderGradient { ...args } />;
BorderGradient.args = {
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
