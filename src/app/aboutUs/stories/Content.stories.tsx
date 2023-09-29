// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { Content } from '../style'
import * as S from '../style'
import { ComponentChildProp } from '../../utils/ComponentChildProp'

export default {
  title: 'Pages/About Us/Micros/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const successChild = (
  <S.Content>
    <S.Title>Title example here</S.Title>
    <S.SubTitle>Subtitle example here</S.SubTitle>
    <S.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor nec
      urna tristique luctus. Vivamus venenatis felis ac erat ultrices tristique.
      Nulla facilisi. Sed suscipit dui et libero iaculis suscipit. Morbi sodales
      odio sit amet tortor fermentum, id tempus lectus hendrerit. Curabitur vel
      bibendum nulla. Fusce at massa nec turpis elementum ultrices. Suspendisse
      potenti. Proin feugiat ante sit amet massa pellentesque, quis tempor nulla
      bibendum. Maecenas in lorem sit amet purus vulputate tincidunt sed non
      ligula. Fusce a purus eget leo facilisis feugiat. Aliquam a dolor quis
      quam rhoncus suscipit. Proin ac ante id tellus congue elementum ac eu
      orci. Integer sit amet feugiat elit. Vivamus feugiat metus a libero
      euismod euismod. Duis bibendum odio et nisl varius venenatis.
    </S.Text>
  </S.Content>
)

const errorChild = (
  <S.Content>
    <span>Falha ao obter dados do 'Quem Somos'.</span>
  </S.Content>
)

const loadingChild = (
  <S.Content>
    <span>Carregando...</span>
  </S.Content>
)

const Template: StoryFn<ComponentChildProp> = (args) => <Content {...args} />

export const Success = Template.bind({})
Success.args = {
  children: successChild,
}

export const Error = Template.bind({})
Error.args = {
  children: errorChild,
}

export const Loading = Template.bind({})
Loading.args = {
  children: loadingChild,
}
