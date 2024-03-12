import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import ViewportSuspenseLoading from './ViewportSuspenseLoading'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RecylinkReactComponents/ViewportSuspenseLoading',
  component: ViewportSuspenseLoading
} as ComponentMeta<typeof ViewportSuspenseLoading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ViewportSuspenseLoading> = args => <ViewportSuspenseLoading {...args} />

const Component: React.FunctionComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 60000))
  return import('./index')
})

export const BlockViewportSuspenseLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlockViewportSuspenseLoading.args = {
  className: 'recylink-loading-block-default-height',
  children: <Component />
}

export const CustomFallbackViewportSuspenseLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomFallbackViewportSuspenseLoading.args = {
  fallback: 'Loading...',
  children: <Component />
}
