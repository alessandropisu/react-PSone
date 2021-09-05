import React from 'react';
import Button, { ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  children: 'Default',
};

Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

Success.args = {
  variant: 'success',
  children: 'Success',
};

Warning.args = {
  variant: 'warning',
  children: 'warning',
};

Error.args = {
  variant: 'error',
  children: 'Error',
};

Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
