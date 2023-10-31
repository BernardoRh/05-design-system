import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bernardorh-ignite-ui/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro natus eaque cumque quisquam temporibus accusamus quod possimus, maiores recusandae deleniti omnis, accusantium magnam fuga rerum laudantium ipsam distinctio non asperiores!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
