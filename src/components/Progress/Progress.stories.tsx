import React from 'react';
import Progress, { ProgressProps } from './Progress';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta;

const Template: Story<ProgressProps> = args => <Progress {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Indeterminate = Template.bind({});

Default.args = {
  label: 'Default',
  value: 80,
};

Primary.args = {
  label: 'Primary',
  variant: 'primary',
  value: 80,
};

Success.args = {
  label: 'Success',
  variant: 'success',
  value: 80,
};

Warning.args = {
  label: 'Warning',
  variant: 'warning',
  value: 80,
};

Error.args = {
  label: 'Error',
  variant: 'error',
  value: 80,
};

Indeterminate.args = {
  label: 'Indeterminate',
  variant: 'indeterminate',
  value: 80,
};
