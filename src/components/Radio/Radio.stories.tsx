import React from 'react';
import Radio, { RadioProps } from './Radio';
import { Story, Meta } from '@storybook/react';
import { Container } from '..';

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = args => (
  <Container label="Radio">
    <div style={{ padding: '0.75rem' }}>
      <Radio {...args} value="yes">
        Yes
      </Radio>
      <Radio {...args} value="no">
        No
      </Radio>
      <Radio {...args} value="maybe">
        Maybe
      </Radio>
    </div>
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  name: 'test',
};
