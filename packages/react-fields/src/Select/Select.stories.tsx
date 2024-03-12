import React, { useState } from 'react'
import { Meta } from '@storybook/react';
import Select from './Select';

const meta: Meta = {
  component: Select,
  title: 'Select',
  parameters: {
    controls: { expanded: true, hideNoControlsWarning: true, console: true},
  },
};

export default meta;



const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];
const handleSelectChange = (value: any, setSelectedValue: (arg0: any) => void) => {
  setSelectedValue(value);
  console.log(value);
};

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={(e)=>handleSelectChange(e, setSelectedValue)}
    />
};

export const MultiSelect = () => {
 const [selectedValue, setSelectedValue] = useState([]);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      multi
    />
};

export const WithExtraOptions = () => {
  const [selectedValue, setSelectedValue] = useState([]);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      extraOptions= {[{ value: '4', label: 'Extra Option 4' }]}
    />
};

export const WithFilter = () =>{
  const [selectedValue, setSelectedValue] = useState([]);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      filter= {['2']}
    />
};

export const WithPreselectedValue = () => {
  const [selectedValue, setSelectedValue] = useState(['2']);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
    />
};

export const Disabled = () => {
  const [selectedValue, setSelectedValue] = useState([]);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      disabled
    />
};

export const WithIcon = () => {
  const [selectedValue, setSelectedValue] = useState([]);
   return <Select
      label="Select Field example"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      icon = 'FiCode'
      iconLibrary = "fi"
    />
  }


