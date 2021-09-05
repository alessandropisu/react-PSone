import React from 'react';
import Icon, { IconProps } from './Icon';
import { Story, Meta } from '@storybook/react';
import { Container } from '..';

const icons = [
  'ddr1',
  'ddr2',
  'ddr3',
  'square',
  'triangle',
  'circle',
  'x',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'select',
  'start',
  'l1',
  'r1',
  'l2',
  'r2',
  'l3',
  'r3',
  'psone',
];

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = () => (
  <Container label="Icons">
    <div style={{ padding: '0.75rem' }}>
      {icons.map(icon => (
        <span key={icon}>
          <Icon
            variant={icon as IconProps['variant']}
            style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
          />
          <p style={{ display: 'inline' }}>{icon}</p>
        </span>
      ))}
    </div>
  </Container>
);

export const Default = Template.bind({});
