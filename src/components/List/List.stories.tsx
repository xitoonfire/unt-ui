import { StoryFn, Meta } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'Utility/List',
  component: List,
  argTypes: {
    items: { control: { type: 'object' } },
    type: { control: { type: 'radio', options: ['ordered', 'unordered'] } }, 
    className: { control: { type: 'text' } },
    itemClassName: { control: { type: 'text' } },
  },
} as Meta<ListProps>;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const UnorderedList = Template.bind({});
UnorderedList.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const OrderedList = Template.bind({});
OrderedList.args = {
  items: ['First', 'Second', 'Third'],
  type: 'ordered',
};
