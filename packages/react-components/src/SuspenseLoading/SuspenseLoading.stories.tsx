import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import SuspenseLoading from './SuspenseLoading'
import './styles.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RecylinkReactComponents/SuspenseLoading',
  component: SuspenseLoading
} as ComponentMeta<typeof SuspenseLoading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuspenseLoading> = args => <SuspenseLoading {...args} />

const Component = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 60000))
  return import('./Component')
})

export const BlockSuspenseLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlockSuspenseLoading.args = {
  className: 'recylink-loading-block-default-height',
  children: <Component />
}

export const CustomFallbackSuspenseLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomFallbackSuspenseLoading.args = {
  fallback: 'Loading...',
  children: <Component />
}
