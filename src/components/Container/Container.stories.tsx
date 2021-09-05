import React from 'react';
import Container, { ContainerProps } from './Container';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = args => <Container {...args} />;

export const Default = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});

Default.args = {
  label: 'Default',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </p>
  ),
};

Dark.args = {
  label: 'Dark',
  variant: 'dark',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </p>
  ),
};

Light.args = {
  label: 'Light',
  variant: 'light',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </p>
  ),
};
