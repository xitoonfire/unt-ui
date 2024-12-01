import { Meta, StoryFn } from '@storybook/react';
import Table, { TableProps } from './Table'; 

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />; 

export const WithDeleteButton = Template.bind({});
WithDeleteButton.args = {
  columns: [
    { header: 'ID', accessor: 'id', width: '100px' },
    { header: 'Name', accessor: 'name', width: '200px' },
    { header: 'Age', accessor: 'age' }, 
  ],
  data: [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Mark Johnson', age: 45 },
  ],
  allowDelete: true, 
};

export const WithoutDeleteButton = Template.bind({});
WithoutDeleteButton.args = {
  columns: [
    { header: 'ID', accessor: 'id', width: '100px' },
    { header: 'Name', accessor: 'name', width: '200px' },
    { header: 'Age', accessor: 'age' }, 
  ],
  data: [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Mark Johnson', age: 45 },
  ],
  allowDelete: false,
};