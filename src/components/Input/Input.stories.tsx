import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'date'],
      },
    },
    isRequired: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Enter your username',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter your password',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Enter your email',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  placeholder: 'Enter your age',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
};


export const Required = Template.bind({});
Required.args = {
  type: 'text',
  placeholder: 'Required field',
  isRequired: true,
};