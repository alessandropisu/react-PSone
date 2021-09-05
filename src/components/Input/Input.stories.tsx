import React from 'react';
import Input, { InputProps } from './Input';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
export const Placeholder = Template.bind({});

Default.args = {
  label: 'Default',
};

Placeholder.args = {
  label: 'With placeholder',
  placeholder: 'Placeholder example',
};
