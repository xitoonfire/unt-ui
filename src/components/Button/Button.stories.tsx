import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'warning', 'secondary', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'boxed'],
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'medium',
  shape: 'rounded',
  disabled: false,
  onClick: () => alert('Primary button clicked!'),
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Button',
  variant: 'success',
  size: 'medium',
  shape: 'rounded',
  disabled: false,
  onClick: () => alert('Success button clicked!'),
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger',
  size: 'medium',
  shape: 'rounded',
  disabled: false,
  onClick: () => alert('Danger button clicked!'),
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  variant: 'warning',
  size: 'medium',
  shape: 'rounded',
  disabled: false,
  onClick: () => alert('Warning button clicked!'),
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link Button',
  variant: 'link',
  size: 'medium',
  shape: 'boxed',
  disabled: false,
  onClick: () => alert('Link button clicked!'),
};
